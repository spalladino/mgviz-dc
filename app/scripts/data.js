
// Setup data

var syndromesCases = [{"user_id":"USER-0","date_onset":"2015-06-07","date_reported":"2015-06-08","coords_reported":[-44.166579547126275,-23.196792124315248],"lat_reported":-23.196792124315248,"lng_reported":-44.166579547126275,"syndrome":"Diarreica","age":26,"gender":"Female"},{"user_id":"USER-1","date_onset":"2015-06-05","date_reported":"2015-06-12","coords_reported":[-43.54693748872624,-23.410878688012055],"lat_reported":-23.410878688012055,"lng_reported":-43.54693748872624,"syndrome":"Diarreica","age":19,"gender":"Female"},{"user_id":"USER-2","date_onset":"2015-06-09","date_reported":"2015-06-12","coords_reported":[-43.34294961553106,-23.455171178155535],"lat_reported":-23.455171178155535,"lng_reported":-43.34294961553106,"syndrome":"Respiratoria","age":25,"gender":"Male"},{"user_id":"USER-3","date_onset":"2015-06-19","date_reported":"2015-06-04","coords_reported":[-44.030063106429395,-23.3759999181421],"lat_reported":-23.3759999181421,"lng_reported":-44.030063106429395,"syndrome":"Exantematica","age":11,"gender":"Male"},{"user_id":"USER-4","date_onset":"2015-06-17","date_reported":"2015-06-02","coords_reported":[-43.68475484710633,-23.573222061457113],"lat_reported":-23.573222061457113,"lng_reported":-43.68475484710633,"syndrome":"Diarreica","age":5,"gender":"Female"},{"user_id":"USER-5","date_onset":"2015-06-10","date_reported":"2015-06-07","coords_reported":[-43.97193579035033,-23.137305032431964],"lat_reported":-23.137305032431964,"lng_reported":-43.97193579035033,"syndrome":"Exantematica","age":29,"gender":"Female"},{"user_id":"USER-6","date_onset":"2015-06-20","date_reported":"2015-06-12","coords_reported":[-44.038143173940874,-23.54013527304068],"lat_reported":-23.54013527304068,"lng_reported":-44.038143173940874,"syndrome":"Respiratoria","age":29,"gender":"Female"},{"user_id":"USER-7","date_onset":"2015-06-08","date_reported":"2015-06-20","coords_reported":[-43.490406099372095,-23.314936376561306],"lat_reported":-23.314936376561306,"lng_reported":-43.490406099372095,"syndrome":"Exantematica","age":24,"gender":"Female"},{"user_id":"USER-8","date_onset":"2015-06-05","date_reported":"2015-06-07","coords_reported":[-43.45780110084204,-23.098048511836463],"lat_reported":-23.098048511836463,"lng_reported":-43.45780110084204,"syndrome":"Diarreica","age":7,"gender":"Male"},{"user_id":"USER-9","date_onset":"2015-06-08","date_reported":"2015-06-15","coords_reported":[-43.48211511359226,-23.166977727113103],"lat_reported":-23.166977727113103,"lng_reported":-43.48211511359226,"syndrome":"Respiratoria","age":0,"gender":"Female"},{"user_id":"USER-10","date_onset":"2015-06-07","date_reported":"2015-06-13","coords_reported":[-44.59537822420656,-23.428226865571343],"lat_reported":-23.428226865571343,"lng_reported":-44.59537822420656,"syndrome":"Exantematica","age":29,"gender":"Female"},{"user_id":"USER-11","date_onset":"2015-06-20","date_reported":"2015-06-10","coords_reported":[-44.43195634522497,-23.1661850357856],"lat_reported":-23.1661850357856,"lng_reported":-44.43195634522497,"syndrome":"Respiratoria","age":23,"gender":"Female"},{"user_id":"USER-12","date_onset":"2015-06-17","date_reported":"2015-06-19","coords_reported":[-43.899362436186706,-23.789321212207426],"lat_reported":-23.789321212207426,"lng_reported":-43.899362436186706,"syndrome":"Diarreica","age":26,"gender":"Male"},{"user_id":"USER-13","date_onset":"2015-06-03","date_reported":"2015-06-20","coords_reported":[-43.74243330368234,-23.382947425196665],"lat_reported":-23.382947425196665,"lng_reported":-43.74243330368234,"syndrome":"Respiratoria","age":3,"gender":"Male"},{"user_id":"USER-14","date_onset":"2015-06-12","date_reported":"2015-06-09","coords_reported":[-43.21489686079355,-23.69622318330003],"lat_reported":-23.69622318330003,"lng_reported":-43.21489686079355,"syndrome":"Exantematica","age":28,"gender":"Male"},{"user_id":"USER-15","date_onset":"2015-06-18","date_reported":"2015-06-20","coords_reported":[-43.29836038541447,-22.757843068597406],"lat_reported":-22.757843068597406,"lng_reported":-43.29836038541447,"syndrome":"Exantematica","age":5,"gender":"Male"},{"user_id":"USER-16","date_onset":"2015-06-20","date_reported":"2015-06-06","coords_reported":[-43.87991943613941,-23.7318065438759],"lat_reported":-23.7318065438759,"lng_reported":-43.87991943613941,"syndrome":"Diarreica","age":11,"gender":"Female"},{"user_id":"USER-17","date_onset":"2015-06-11","date_reported":"2015-06-20","coords_reported":[-43.98941368816843,-22.964426243343357],"lat_reported":-22.964426243343357,"lng_reported":-43.98941368816843,"syndrome":"Respiratoria","age":1,"gender":"Male"},{"user_id":"USER-18","date_onset":"2015-06-01","date_reported":"2015-06-10","coords_reported":[-43.396496515956365,-23.11745016571335],"lat_reported":-23.11745016571335,"lng_reported":-43.396496515956365,"syndrome":"Exantematica","age":14,"gender":"Female"},{"user_id":"USER-19","date_onset":"2015-06-20","date_reported":"2015-06-04","coords_reported":[-44.59349576138263,-22.897511625690857],"lat_reported":-22.897511625690857,"lng_reported":-44.59349576138263,"syndrome":"Exantematica","age":22,"gender":"Male"},{"user_id":"USER-20","date_onset":"2015-06-05","date_reported":"2015-06-17","coords_reported":[-43.61777558839629,-23.68949858626991],"lat_reported":-23.68949858626991,"lng_reported":-43.61777558839629,"syndrome":"Exantematica","age":23,"gender":"Female"},{"user_id":"USER-21","date_onset":"2015-06-18","date_reported":"2015-06-11","coords_reported":[-43.878942077891914,-23.36987214481943],"lat_reported":-23.36987214481943,"lng_reported":-43.878942077891914,"syndrome":"Respiratoria","age":18,"gender":"Female"},{"user_id":"USER-22","date_onset":"2015-06-10","date_reported":"2015-06-01","coords_reported":[-44.3138404099445,-23.898801201124968],"lat_reported":-23.898801201124968,"lng_reported":-44.3138404099445,"syndrome":"Respiratoria","age":25,"gender":"Male"},{"user_id":"USER-23","date_onset":"2015-06-17","date_reported":"2015-06-19","coords_reported":[-43.58140716950017,-23.086714246631608],"lat_reported":-23.086714246631608,"lng_reported":-43.58140716950017,"syndrome":"Respiratoria","age":11,"gender":"Female"},{"user_id":"USER-24","date_onset":"2015-06-14","date_reported":"2015-06-06","coords_reported":[-43.59231728048606,-23.20168542239652],"lat_reported":-23.20168542239652,"lng_reported":-43.59231728048606,"syndrome":"Diarreica","age":9,"gender":"Male"},{"user_id":"USER-25","date_onset":"2015-06-19","date_reported":"2015-06-03","coords_reported":[-43.41075462412119,-23.203852874563715],"lat_reported":-23.203852874563715,"lng_reported":-43.41075462412119,"syndrome":"Exantematica","age":7,"gender":"Female"},{"user_id":"USER-26","date_onset":"2015-06-20","date_reported":"2015-06-16","coords_reported":[-43.72575749321162,-23.45830744841485],"lat_reported":-23.45830744841485,"lng_reported":-43.72575749321162,"syndrome":"Diarreica","age":10,"gender":"Male"},{"user_id":"USER-27","date_onset":"2015-06-04","date_reported":"2015-06-05","coords_reported":[-44.072099396325214,-23.61895101205761],"lat_reported":-23.61895101205761,"lng_reported":-44.072099396325214,"syndrome":"Diarreica","age":7,"gender":"Female"},{"user_id":"USER-28","date_onset":"2015-06-06","date_reported":"2015-06-01","coords_reported":[-43.31713400207191,-23.684668986393934],"lat_reported":-23.684668986393934,"lng_reported":-43.31713400207191,"syndrome":"Diarreica","age":8,"gender":"Male"},{"user_id":"USER-29","date_onset":"2015-06-01","date_reported":"2015-06-16","coords_reported":[-43.58044648788195,-23.301545018815926],"lat_reported":-23.301545018815926,"lng_reported":-43.58044648788195,"syndrome":"Diarreica","age":5,"gender":"Male"},{"user_id":"USER-30","date_onset":"2015-06-10","date_reported":"2015-06-02","coords_reported":[-43.81425219623602,-23.619005847265775],"lat_reported":-23.619005847265775,"lng_reported":-43.81425219623602,"syndrome":"Diarreica","age":12,"gender":"Male"},{"user_id":"USER-31","date_onset":"2015-06-03","date_reported":"2015-06-06","coords_reported":[-44.517135992870635,-23.673486036153708],"lat_reported":-23.673486036153708,"lng_reported":-44.517135992870635,"syndrome":"Respiratoria","age":9,"gender":"Male"},{"user_id":"USER-32","date_onset":"2015-06-04","date_reported":"2015-06-16","coords_reported":[-44.08178114610242,-23.711126151313277],"lat_reported":-23.711126151313277,"lng_reported":-44.08178114610242,"syndrome":"Exantematica","age":14,"gender":"Female"},{"user_id":"USER-33","date_onset":"2015-06-09","date_reported":"2015-06-19","coords_reported":[-44.187051899974755,-23.929203468884413],"lat_reported":-23.929203468884413,"lng_reported":-44.187051899974755,"syndrome":"Exantematica","age":23,"gender":"Male"},{"user_id":"USER-34","date_onset":"2015-06-02","date_reported":"2015-06-13","coords_reported":[-43.83765574394893,-22.84587073665959],"lat_reported":-22.84587073665959,"lng_reported":-43.83765574394893,"syndrome":"Respiratoria","age":25,"gender":"Male"},{"user_id":"USER-35","date_onset":"2015-06-15","date_reported":"2015-06-14","coords_reported":[-43.54442420649781,-23.20549793132134],"lat_reported":-23.20549793132134,"lng_reported":-43.54442420649781,"syndrome":"Exantematica","age":2,"gender":"Male"},{"user_id":"USER-36","date_onset":"2015-06-08","date_reported":"2015-06-14","coords_reported":[-43.58181600119229,-23.002456399688015],"lat_reported":-23.002456399688015,"lng_reported":-43.58181600119229,"syndrome":"Respiratoria","age":25,"gender":"Male"},{"user_id":"USER-37","date_onset":"2015-06-13","date_reported":"2015-06-20","coords_reported":[-43.4227061080709,-23.221912790128044],"lat_reported":-23.221912790128044,"lng_reported":-43.4227061080709,"syndrome":"Respiratoria","age":18,"gender":"Male"},{"user_id":"USER-38","date_onset":"2015-06-05","date_reported":"2015-06-15","coords_reported":[-44.10029260581874,-23.284899973615286],"lat_reported":-23.284899973615286,"lng_reported":-44.10029260581874,"syndrome":"Diarreica","age":13,"gender":"Female"},{"user_id":"USER-39","date_onset":"2015-06-16","date_reported":"2015-06-19","coords_reported":[-43.31747832929814,-23.726394693487723],"lat_reported":-23.726394693487723,"lng_reported":-43.31747832929814,"syndrome":"Respiratoria","age":13,"gender":"Male"},{"user_id":"USER-40","date_onset":"2015-06-20","date_reported":"2015-06-09","coords_reported":[-43.72067470126998,-23.974462282227154],"lat_reported":-23.974462282227154,"lng_reported":-43.72067470126998,"syndrome":"Exantematica","age":27,"gender":"Female"},{"user_id":"USER-41","date_onset":"2015-06-19","date_reported":"2015-06-03","coords_reported":[-43.54019976468359,-23.701380767902794],"lat_reported":-23.701380767902794,"lng_reported":-43.54019976468359,"syndrome":"Exantematica","age":15,"gender":"Female"},{"user_id":"USER-42","date_onset":"2015-06-10","date_reported":"2015-06-03","coords_reported":[-44.390820561245434,-23.40700559534085],"lat_reported":-23.40700559534085,"lng_reported":-44.390820561245434,"syndrome":"Exantematica","age":27,"gender":"Male"},{"user_id":"USER-43","date_onset":"2015-06-16","date_reported":"2015-06-09","coords_reported":[-43.589599382683716,-23.414099123799613],"lat_reported":-23.414099123799613,"lng_reported":-43.589599382683716,"syndrome":"Diarreica","age":20,"gender":"Female"},{"user_id":"USER-44","date_onset":"2015-06-19","date_reported":"2015-06-19","coords_reported":[-44.28097892076677,-23.676365439534568],"lat_reported":-23.676365439534568,"lng_reported":-44.28097892076677,"syndrome":"Diarreica","age":0,"gender":"Female"},{"user_id":"USER-45","date_onset":"2015-06-13","date_reported":"2015-06-10","coords_reported":[-43.75992286474747,-23.09818987704465],"lat_reported":-23.09818987704465,"lng_reported":-43.75992286474747,"syndrome":"Respiratoria","age":2,"gender":"Male"},{"user_id":"USER-46","date_onset":"2015-06-07","date_reported":"2015-06-14","coords_reported":[-43.888811213032554,-22.838920967425814],"lat_reported":-22.838920967425814,"lng_reported":-43.888811213032554,"syndrome":"Exantematica","age":8,"gender":"Female"},{"user_id":"USER-47","date_onset":"2015-06-17","date_reported":"2015-06-20","coords_reported":[-43.67310071506866,-23.320621067713585],"lat_reported":-23.320621067713585,"lng_reported":-43.67310071506866,"syndrome":"Diarreica","age":20,"gender":"Male"},{"user_id":"USER-48","date_onset":"2015-06-03","date_reported":"2015-06-01","coords_reported":[-44.058266515687095,-23.72912160348219],"lat_reported":-23.72912160348219,"lng_reported":-44.058266515687095,"syndrome":"Respiratoria","age":28,"gender":"Female"},{"user_id":"USER-49","date_onset":"2015-06-02","date_reported":"2015-06-20","coords_reported":[-44.40423693622168,-23.748923279056207],"lat_reported":-23.748923279056207,"lng_reported":-44.40423693622168,"syndrome":"Diarreica","age":29,"gender":"Female"}];
var symptomsCases;

$.ajax('data/symptoms.json', {async: false, ifModified: true, dataType: 'json'}).done(function(data) {
  symptomsCases = data;
});


// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

syndromesCases.forEach(function(d) {
  switch(getRandomIntInclusive(0,9)) {
    case 0: d.region = "A.P. 1.0"; break;
    case 1: d.region = "A.P. 2.1"; break;
    case 2: d.region = "A.P. 2.2"; break;
    case 3: d.region = "A.P. 3.1"; break;
    case 4: d.region = "A.P. 3.2"; break;
    case 5: d.region = "A.P. 3.3"; break;
    case 6: d.region = "A.P. 4.0"; break;
    case 7: d.region = "A.P. 5.1"; break;
    case 8: d.region = "A.P. 5.2"; break;
    case 9: d.region = "A.P. 5.3"; break;
  }
})


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
