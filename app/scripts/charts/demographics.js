// Demographic pie charts

var buildDemographicPieChart = function(target, dataset, variable) {
  console.log("FOO!");
  var dimension = dataset.dimension(function(d) {
    return d[variable];
  });

  var group = dimension.group();

  return dc.pieChart(target)
    .width(250)
    .height(200)
    .dimension(dimension)
    .group(group);
};

buildDemographicPieChart('#syndromesGenderChart', syndromesDataset, 'gender');
buildDemographicPieChart('#symptomsGenderChart', symptomsDataset, 'gender');

buildDemographicPieChart('#syndromesRoleChart', syndromesDataset, 'role');
buildDemographicPieChart('#symptomsRoleChart', symptomsDataset, 'role');


