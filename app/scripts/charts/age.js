// Age group charts

var ageSteps = [5,10,15,20,25,30,40,50,60];
var buildAgeChart = function(target, dataset) {
  var dimension = dataset.dimension(function(d) {
    return d.age;
  });

  var group = dimension.group(function(age) {
    var index = _.findIndex(ageSteps, function(step) {
      return age <= step;
    });
    return index < 0 ? ageSteps.length : index;
  })

  var chart = dc.rowChart(target)
    .width(550)
    .height(400)
    .margins({top: 30, right: 40, bottom: 30, left: 40})
    .dimension(dimension)
    .colorAccessor(function (d) { return d.value; })
    .group(group)
    .label(function(d) {
      var index = d.key;
      if (index == 0) {
        return "< " + String(ageSteps[0]);
      } else  if (index < ageSteps.length) {
        return String(ageSteps[index-1]) + "-" + String(ageSteps[index]);
      } else {
        return "> " + String(ageSteps[ageSteps.length-1]);
      }
    });

  setDefaultColors(chart, group);
  return chart;
};

buildAgeChart('#syndromesAgeChart', syndromesDataset);
buildAgeChart('#symptomsAgeChart', symptomsDataset);


