// Time series chart
var symptomsTimeChart = dc.lineChart("#symptomsTimeSeries");
var symptomsNavChart = dc.barChart("#symptomsTimeNavigation");

var volumeByHour = symptomsDataset.dimension(function(d) {
  return new Date(d.date_onset);
});

var volumeByHourGroup = volumeByHour.group(
  function(the_date){
    return d3.time.day(the_date); // TODO make the granularity easier to see
  }
);

//For some very strange reason reduceCount is not working - it is simply never
//called when group().reduceCount() is run on a set -
// - could this be because we are using a bleeding edge version of dc.js?
//So instead we just do some hacking - using reduceSum as a reduceCount alternative

var symptomGroupsTimeSeries =
  volumeByHour
  .group(function(date){
      return d3.time.day(date); // TODO make the granularity easier to see
  })
  .reduce(
    function(p, d){
      p[d.symptom] = (p[d.symptom] || 0) + 1;
      return p;
    },
    function(p, d) {
      --p[d.symptom];
      return p;
    },
    function() { return {}; }
  );

//inspired by this hack, which was actually wrongly implemented?
//http://stackoverflow.com/questions/24415665/dc-js-stacked-area-chart-using-reducecount-method

//This extracts all the symptoms we have seen!
//We have to extract the first element here because we can't modify the array
// as everything here is lazy and computed asynchronously!
console.log(symptomsGroup.top(Infinity));
var observed_symptoms = symptomsGroup.top(Infinity).map(function(obj){ return obj.key; });
var first_symptom = observed_symptoms[0];
observed_symptoms.shift();

symptomsTimeChart
  .width(1100)
  .height(300)
  .renderArea(true)
  .margins({top: 10, right: 10, bottom: 20, left: 40})
  .dimension(volumeByHour)
  .group(symptomGroupsTimeSeries, first_symptom, function(d){
    return d.value[first_symptom] || 0;
  })
  .brushOn(false) // we need this for the clickable hack haha
/*=======
var buildTimeChart = function(target, dataset) {
  var volumeByHour = dataset.dimension(function(d) {
    return d3.time.day(new Date(d.date_onset));
  });

  var volumeByHourGroup = volumeByHour.group().reduceCount(function(d) {
    return d.date_onset;
  });

  var chart = dc.lineChart(target).width(1000)
    .height(300)
    .margins({top: 30, right: 40, bottom: 60, left: 40})
    .dimension(volumeByHour)
    .group(volumeByHourGroup)
    .elasticY(true)
    .x(d3.time.scale()) //x(d3.time.scale().domain([new Date(2014, 1, 1), new Date(2014, 12, 31)]))
    .elasticX(true)
    .xAxis();
  return chart;
};

var syndromesTimeSeries = buildTimeChart('#syndromesTimeSeries', syndromesDataset);
var symptomsTimeSeries = buildTimeChart('#symptomsTimeSeries', symptomsDataset);

*/


observed_symptoms.forEach(function(field, i){
  symptomsTimeChart.stack(symptomGroupsTimeSeries, observed_symptoms[i], function(d){
    return d.value[field] || 0;
  });
});

symptomsTimeChart
  .rangeChart(symptomsNavChart)
  .transitionDuration(500)
  .elasticY(true)
  .x(d3.time.scale().domain([new Date(2015, 5, 1), new Date(2015, 5, 19)]))
  .xUnits(d3.time.days)
  .xAxis()

//This hack is terrible but dives into d3 to find the area entities in the
//svg and makes them clickable.
symptomsTimeChart.on('renderlet.timechart', function(chart, filter) {
    chart.selectAll("path.area").on("click.timechart", (
      function(d) {
        symptomsChart.filter([d.name]);
        dc.redrawAll();
      }
    ));
  });

//onclick issue maybe fixed here https://github.com/dc-js/dc.js/issues/168

symptomsNavChart.width(1140)
  .height(60)
  .margins({top: 0, right: 50, bottom: 20, left: 40})
  .dimension(volumeByHour)
  .group(volumeByHourGroup)
  .centerBar(true)
  .gap(1)
  //.elasticX(true)
  .x(d3.time.scale().domain([new Date(2015, 5, 1), new Date(2015, 5, 19)]))
  .round(d3.time.days.round)
  .alwaysUseRounding(true)
  .xUnits(d3.time.days);
