// jshint devel:true

// Event handlers

$('#datasetTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
}).first().tab('show');


// Alerts management

var setFilters = function(filters) {
  if (filters.syndrome) {
    syndromesChart.filter(filters.syndrome);
    dc.redrawAll();
    $('#syndromesTab').tab('show');
  } else if (filters.symptom) {
    symptomsChart.filter(filters.symptom);
    dc.redrawAll();
    $('#symptomsTab').tab('show');
  }
};
var userAlerts = [{"alert_date":"2015-06-07","alert_syndrome":"Diarreica","alert_region":"Brasilia"}];

// Alerts management

var setFilters = function(filters) {
syndromesChart.filter(filters.syndrome);
dc.redrawAll();
//  if (filters.syndrome) {
//    syndromesChart.filter(filters.syndrome);
//    dc.redrawAll();
//    $('#syndromesTab').tab('show');
//  } else if (filters.symptom) {
//    symptomsChart.filter(filters.symptom);
//    dc.redrawAll();
//    $('#symptomsTab').tab('show');
//  }
};

// Go!

dc.renderAll();

