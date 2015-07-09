if (process.argv.length < 3) {
  console.log("You must specify the symptoms file.");
  return;
}

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

function eliminateDuplicates(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

  for (i=0;i<len;i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}

filename = process.argv[2];
console.log("Loading... " + filename);
fs = require('fs');
fs.readFile(filename, 'utf8', function (err, text) {
  if (err) return console.log(err);
  
  data = JSON.parse(text);

  d3 = require("d3");
  format = d3.time.format("%Y-%m-%d");

//  var syndromeMatrix = {
//   "Diarreica": ["Fever", "Nuasea and Vommitting", "Diarrhea"],
//   "Exantemática": ["Fever", "Cough", "Joint-pain", "Headache"],
//   "Respiratória": ["Fever", "Cough", "Sore throat"],
//  }

  var syndromeMatrix = {
   "Diarreica": ["Fever", "Nuasea and Vommitting"],
   "Exantemática": ["Fever", "Headache"],
   "Respiratória": ["Fever", "Sore throat"],
  }

  // don't trust this algorithm too much
  var nest = d3.nest()
    .key(function(d) { return d["user_id"]; })
    .key(function(d) { return d["date_onset"]; })
    .sortKeys(d3.ascending)
    .map(data, d3.map);

  var syndromes = [];
  nest.forEach(function(user_id, dates) {
//    console.log("User: " + user_id);
    dates = dates.entries().sort(function(a,b) {
      if (a.key > b.key) return 1;
      if (a.key < b.key) return -1;
      return 0;
    });
    dates.forEach(function(date) {
      var d = format.parse(date.key);
      var reports = date.value;
      
//      console.log("  " + format(d) + "(" + reports.map(function(r) { return r.symptom }) + ")");
//      console.log(dates);
      var window = dates.filter(function(c) {
//        console.log(c.key)
        days = (format.parse(c.key) - d) / (24 * 60 * 60 * 1000);
//        console.log(format(format.parse(c.key))  + " - " + format(d) + " = " + days);
        return days > 0 && days <= 7;
      });
      var symptoms = [];
      reports.forEach(function(r) { symptoms.push(r.symptom) });
//      window.forEach(function(day) { day.value.forEach(function(r) { symptoms.push(r.symptom) }) })
      symptoms = eliminateDuplicates(symptoms).sort();
//      console.log("      7-day future window: " + symptoms);
      
      for(var syndrome in syndromeMatrix) {
        // if symptoms list matches s exactly, then add syndrome
//        console.log(symptom + ": " + syndromeMatrix[symptom]);
        if (syndromeMatrix[syndrome].length == symptoms.length) {
          var match = true;
          syndromeMatrix[syndrome].forEach(function(s,i) {
            if (symptoms[i] != s) match = false;
          });
          if (match) {
            var report = {
              user_id: reports[0].user_id,
              date_onset: reports[0].date_onset,
              date_reported: reports[0].date_reported,
              lat_reported: reports[0].lat_reported,
              lng_reported: reports[0].lng_reported,
              coords_reported: [reports[0].lng_reported, reports[0].lat_reported],
              age: reports[0].age,
              gender: reports[0].gender,
              city: reports[0].city,
              region: reports[0].region,
              foreigner: reports[0].foreigner,
              role: reports[0].role,
              syndrome: syndrome
            };
            syndromes.push(report);
//            console.log("Syndrome: " + JSON.stringify(report, null, 2));
          }
        }
      }
      
   })
  });

  
  var outFile = "syndromes.json";
  fs.writeFile(outFile, JSON.stringify(syndromes, null, 2), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log(syndromes.length + " syndromes saved to " + outFile);
  }); 
});
