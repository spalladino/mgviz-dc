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


// Go!

dc.renderAll();
