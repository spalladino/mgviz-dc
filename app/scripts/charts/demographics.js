// Demographic pie charts

var buildDemographicPieChart = function(target, dataset, variable) {
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

var syndromesRoleChart = buildDemographicPieChart('#syndromesRoleChart', syndromesDataset, 'role');
var symptomsRoleChart = buildDemographicPieChart('#symptomsRoleChart', symptomsDataset, 'role');

var buildBooleanPieChart = function(target, dataset, variable, pos, neg) {
  var dimension = dataset.dimension(function(d) {
    return (d[variable] == '1') ? (pos || 'yes') : (neg || 'no');
  });

  var group = dimension.group();

  return dc.pieChart(target)
    .width(250)
    .height(200)
    .dimension(dimension)
    .group(group);
};


buildBooleanPieChart('#syndromesNeedsHelpChart', syndromesDataset, 'needs_help');
buildBooleanPieChart('#symptomsNeedsHelpChart', symptomsDataset, 'needs_help');

buildBooleanPieChart('#syndromesForeignerChart', syndromesDataset, 'foreigner', 'foreigner', 'national');
buildBooleanPieChart('#symptomsForeignerChart', symptomsDataset, 'foreigner', 'foreigner', 'national');
