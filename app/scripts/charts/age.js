// Age group charts

var ageSteps = [5,10,15,20,25,30,40,50,60];
var buildAgeChart = function(target, dataset) {
  var dimension = dataset.dimension(function(d) {
    return d.ageGroup;
  });

  var group = dimension.group(function(d) { return Math.floor(d / 10) * 10; });

  var chart = dc.rowChart(target)
    .width(400)
    .height(300)
    .margins({top: 25, right: 40, bottom: 30, left: 40})
    .dimension(dimension)
    .colorAccessor(function (d) { return d.value; })
    .group(group)
    .label(function(d) {
      return d.key + " - " + (d.key+9);
    })

  setDefaultColors(chart, group);
  return chart;
};

buildAgeChart('#syndromesAgeChart', syndromesDataset);
buildAgeChart('#symptomsAgeChart', symptomsDataset);


