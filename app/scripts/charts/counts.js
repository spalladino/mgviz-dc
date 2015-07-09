// Row charts

var buildRowChart = function(target, dimension, group) {
  var chart = dc.rowChart(target)
    .width(320)
    .height(300)
    .margins({top: 40, left: 10, right: 10, bottom: 20})
    .colorAccessor(function (d) { return d.value; })
    .group(group)
    .dimension(dimension)
    .label(function (d) {
      return d.key;
    })
    .title(function (d) {
      return d.value;
    })
    .elasticX(true);
  setDefaultColors(chart, group);
  return chart;
};

var syndromesChart = buildRowChart('#syndromesChart', syndromesDimension, syndromesGroup);
var symptomsChart = buildRowChart('#symptomsChart', symptomsDimension, symptomsGroup);


// Data count widget

var syndromesCountChart = dc.dataCount('#syndromesCount').dimension(syndromesDataset).group(allSyndromes);
var symptomsCountChart = dc.dataCount('#symptomsCount').dimension(symptomsDataset).group(allSymptoms);
