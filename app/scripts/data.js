
// Setup data

var symptomsCases;
var syndromesCases;

$.ajax('data/symptoms.json', {async: false, ifModified: true, dataType: 'json'}).done(function(data) {
  symptomsCases = data;
});
$.ajax('data/syndromes.json', {async: false, ifModified: true, dataType: 'json'}).done(function(data) {
  syndromesCases = data;
});


// Initialise datasets, dimensions and groups

var symptomsDataset = crossfilter(symptomsCases);
var allSymptoms = symptomsDataset.groupAll();

var syndromesDataset = crossfilter(syndromesCases);
var allSyndromes = syndromesDataset.groupAll();


var symptomsDimension = symptomsDataset.dimension(function (d) { return d.symptom; });
var symptomsGroup = symptomsDimension.group();

var symptomsDateDimension = symptomsDataset.dimension(function (d) { return new Date(d.date_onset); });


var syndromesDimension = syndromesDataset.dimension(function (d) { return d.syndrome; });
var syndromesGroup = syndromesDimension.group();

var syndromesDateDimension = syndromesDataset.dimension(function(d) { return new Date(d.date_onset); });




function exportSymptoms() {
  exportData(symptomsDimension.top(Infinity), "symptoms");
}

function exportSyndromes() {
  exportData(syndromesDimension.top(Infinity), "syndromes");
}

function exportData(data, type) {
  if (data.length > 0) {
    // prepare CSV data
    var csvData = new Array();
    var header = [];
    for(var prop in data[0]) {
      header.push('"' + prop + '"');
    }
    csvData.push(header.join(','));
    data.forEach(function(item, index, array) {
      var row = [];
      for(var prop in item) {
        row.push('"' + item[prop] + '"');
      }
      csvData.push(row.join(','));
    });

    // download stuff
    var fileName = "data-" + type + ".csv";
    var buffer = csvData.join("\n");
    var blob = new Blob([buffer], {
      "type": "text/csv;charset=utf8;"
    });
    var link = document.createElement("a");
    if(link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      link.setAttribute("href", window.URL.createObjectURL(blob));
      link.setAttribute("download", fileName);
      link.click();
     }
    else {
      // it needs to implement server side export
    }
  }
}
