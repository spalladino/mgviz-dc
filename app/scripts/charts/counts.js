// Row charts

var buildRowChart = function(target, dimension, group) {
  var chart = dc.rowChart(target)
    .width(260)
    .height(384)
    .margins({top: 40, left: 10, right: 10, bottom: 20})
    .colors(classesColorScale)
    .colorAccessor(function(d,i) { return i; })
    .group(group)
    .dimension(dimension)
    .label(function (d) {
      return d.key;
    })
    .title(function (d) {
      return d.value;
    })
    .elasticX(true);

  return chart;
};

var syndromesChart = buildRowChart('#syndromesChart', syndromesDimension, syndromesGroup);
var symptomsChart = buildRowChart('#symptomsChart', symptomsDimension, symptomsGroup);


// Data count widget

var syndromesCountChart = dc.dataCount('#syndromesCount').dimension(syndromesDataset).group(allSyndromes);
var symptomsCountChart = dc.dataCount('#symptomsCount').dimension(symptomsDataset).group(allSymptoms);
