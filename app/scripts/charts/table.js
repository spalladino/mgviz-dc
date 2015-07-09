var buildTable = function(dataset, accessor, dateDimension, target) {
  return dc.dataTable(target)
    .dimension(dateDimension)
    .group(function(d) { return "" })
    .size(20)
    .columns([
     function(d) { return d.user_id; },
     function(d) { return d.gender; },
     function(d) { return d.age; },
     function(d) { return d['accessor']; },
     function(d) {
       var date1 = new Date(d.date_onset);
       var date2 = new Date(d.date_reported);
       var timeDiff = Math.abs(date2.getTime() - date1.getTime());
       var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

       return diffDays
     },
     function(d) { return d.date_onset; },
     function(d) { return '<a href=\"http://maps.google.com/maps?z=10&t=m&q=loc:' + String(d.lat_reported) + '+' + String(d.lng_reported) +"\" target=\"_blank\">Map</a>"},
    ]);
};

var syndromesDateDimension = "day";
var symptomsDateDimension = "day";

buildTable(syndromesDataset, 'syndrome', syndromesDateDimension, '#syndromesCaseList');
buildTable(symptomsDataset, 'symptom', symptomsDateDimension, '#symptomsCaseList');
