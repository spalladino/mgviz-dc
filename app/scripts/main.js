// jshint devel:true

// Setup data

var data = [{"user":"558c5fe40b5b308d5591cf48","household":"Me","symptoms":"fever,cough","app_token":"So6H-JD-wr0i-3n","ill_date":"2015-07-09T00:00:00.000Z","lat":-6.983582066367173,"lon":-38.91746749999999,"zip":"","hadTravelledAbroad":false,"travelLocation":"","hadContagiousContact":false,"coordinates":[-38.91746749999999,-6.983582066367173],"createdAt":"2015-07-06T13:41:00.588Z","updatedAt":"2015-07-06T13:41:00.588Z","id":"559a856c679991bb3f80e2bc"},{"lat":69.5426,"lon":-74.1246,"user_id":"559abae94a399b6c5032722e","symptoms":"body_aches,headache","app_token":"test-app","ill_date":"2015-03-06T00:00:00.000Z","coordinates":[-74.1246,69.5426],"createdAt":"2015-07-06T17:29:13.920Z","updatedAt":"2015-07-06T17:29:13.920Z","id":"559abae94a399b6c50327230"},{"lat":-86.123,"lon":-85.7141,"user_id":"559abae94a399b6c5032722f","symptoms":"fever,body_aches,headache","app_token":"test-app","ill_date":"2015-04-23T00:00:00.000Z","coordinates":[-85.7141,-86.123],"createdAt":"2015-07-06T17:29:14.712Z","updatedAt":"2015-07-06T17:29:14.712Z","id":"559abaea4a399b6c50327232"},{"lat":-45.6686,"lon":-103.1477,"user_id":"559abaea4a399b6c50327231","symptoms":"fever,headache","app_token":"test-app","ill_date":"2015-03-10T00:00:00.000Z","coordinates":[-103.1477,-45.6686],"createdAt":"2015-07-06T17:29:14.714Z","updatedAt":"2015-07-06T17:29:14.714Z","id":"559abaea4a399b6c50327233"},{"lat":-10.6529,"lon":15.632,"user_id":"559abb1e4a399b6c50327234","symptoms":"body_aches,fever","app_token":"test-app","ill_date":"2015-03-20T00:00:00.000Z","coordinates":[15.632,-10.6529],"createdAt":"2015-07-06T17:30:07.816Z","updatedAt":"2015-07-06T17:30:07.816Z","id":"559abb1f4a399b6c50327236"},{"lat":79.3324,"lon":54.2352,"user_id":"559abb1f4a399b6c50327235","symptoms":"fever","app_token":"test-app","ill_date":"2015-04-26T00:00:00.000Z","coordinates":[54.2352,79.3324],"createdAt":"2015-07-06T17:30:07.826Z","updatedAt":"2015-07-06T17:30:07.826Z","id":"559abb1f4a399b6c50327237"},{"lat":-11.1964,"lon":42.4754,"user_id":"559abb204a399b6c50327238","symptoms":"headache,body_aches,fever,cough","app_token":"test-app","ill_date":"2015-05-06T00:00:00.000Z","coordinates":[42.4754,-11.1964],"createdAt":"2015-07-06T17:30:09.446Z","updatedAt":"2015-07-06T17:30:09.446Z","id":"559abb214a399b6c5032723a"},{"lat":33.5606,"lon":57.772,"user_id":"559abb214a399b6c50327239","symptoms":"headache","app_token":"test-app","ill_date":"2015-01-29T00:00:00.000Z","coordinates":[57.772,33.5606],"createdAt":"2015-07-06T17:30:10.328Z","updatedAt":"2015-07-06T17:30:10.328Z","id":"559abb224a399b6c5032723c"},{"lat":15.8318,"lon":175.8962,"user_id":"559abb224a399b6c5032723b","symptoms":"cough,body_aches","app_token":"test-app","ill_date":"2015-01-26T00:00:00.000Z","coordinates":[175.8962,15.8318],"createdAt":"2015-07-06T17:30:11.137Z","updatedAt":"2015-07-06T17:30:11.137Z","id":"559abb234a399b6c5032723e"},{"lat":35.3399,"lon":-67.887,"user_id":"559abb234a399b6c5032723d","symptoms":"fever,headache,body_aches","app_token":"test-app","ill_date":"2015-04-01T00:00:00.000Z","coordinates":[-67.887,35.3399],"createdAt":"2015-07-06T17:30:12.015Z","updatedAt":"2015-07-06T17:30:12.015Z","id":"559abb244a399b6c50327240"},{"lat":-14.3593,"lon":-105.7509,"user_id":"559abb244a399b6c5032723f","symptoms":"body_aches","app_token":"test-app","ill_date":"2015-01-11T00:00:00.000Z","coordinates":[-105.7509,-14.3593],"createdAt":"2015-07-06T17:30:12.826Z","updatedAt":"2015-07-06T17:30:12.826Z","id":"559abb244a399b6c50327242"},{"lat":-63.3908,"lon":127.9606,"user_id":"559abb244a399b6c50327241","symptoms":"bleeding","app_token":"test-app","ill_date":"2015-01-03T00:00:00.000Z","coordinates":[127.9606,-63.3908],"createdAt":"2015-07-06T17:30:13.647Z","updatedAt":"2015-07-06T17:30:13.647Z","id":"559abb254a399b6c50327244"},{"lat":-53.8051,"lon":140.1934,"user_id":"559abb254a399b6c50327243","symptoms":"fever,headache,body_aches","app_token":"test-app","ill_date":"2015-04-02T00:00:00.000Z","coordinates":[140.1934,-53.8051],"createdAt":"2015-07-06T17:30:14.535Z","updatedAt":"2015-07-06T17:30:14.535Z","id":"559abb264a399b6c50327246"},{"lat":8.7497,"lon":36.6302,"user_id":"559abb264a399b6c50327245","symptoms":"bleeding","app_token":"test-app","ill_date":"2015-01-28T00:00:00.000Z","coordinates":[36.6302,8.7497],"createdAt":"2015-07-06T17:30:14.538Z","updatedAt":"2015-07-06T17:30:14.538Z","id":"559abb264a399b6c50327247"},{"lat":-41.1819,"lon":-146.2142,"user_id":"559abb3e4a399b6c50327248","symptoms":"fever","app_token":"test-app","ill_date":"2015-03-28T00:00:00.000Z","coordinates":[-146.2142,-41.1819],"createdAt":"2015-07-06T17:30:38.831Z","updatedAt":"2015-07-06T17:30:38.831Z","id":"559abb3e4a399b6c5032724a"},{"lat":-36.5776,"lon":55.7358,"user_id":"559abb3e4a399b6c50327249","symptoms":"body_aches","app_token":"test-app","ill_date":"2015-05-01T00:00:00.000Z","coordinates":[55.7358,-36.5776],"createdAt":"2015-07-06T17:30:39.632Z","updatedAt":"2015-07-06T17:30:39.632Z","id":"559abb3f4a399b6c5032724c"},{"lat":51.0665,"lon":-58.2647,"user_id":"559abb3f4a399b6c5032724b","symptoms":"body_aches,cough,headache","app_token":"test-app","ill_date":"2015-03-25T00:00:00.000Z","coordinates":[-58.2647,51.0665],"createdAt":"2015-07-06T17:30:40.508Z","updatedAt":"2015-07-06T17:30:40.508Z","id":"559abb404a399b6c5032724e"},{"lat":74.9186,"lon":-110.1031,"user_id":"559abb404a399b6c5032724d","symptoms":"headache,fever,cough","app_token":"test-app","ill_date":"2015-02-07T00:00:00.000Z","coordinates":[-110.1031,74.9186],"createdAt":"2015-07-06T17:30:41.331Z","updatedAt":"2015-07-06T17:30:41.331Z","id":"559abb414a399b6c50327250"},{"lat":-60.87,"lon":-123.3568,"user_id":"559abb414a399b6c5032724f","symptoms":"headache,cough,body_aches","app_token":"test-app","ill_date":"2015-04-25T00:00:00.000Z","coordinates":[-123.3568,-60.87],"createdAt":"2015-07-06T17:30:42.144Z","updatedAt":"2015-07-06T17:30:42.144Z","id":"559abb424a399b6c50327252"},{"lat":19.6961,"lon":156.1466,"user_id":"559abb424a399b6c50327251","symptoms":"body_aches,fever","app_token":"test-app","ill_date":"2015-02-15T00:00:00.000Z","coordinates":[156.1466,19.6961],"createdAt":"2015-07-06T17:30:43.013Z","updatedAt":"2015-07-06T17:30:43.013Z","id":"559abb434a399b6c50327254"},{"lat":15.1752,"lon":19.4958,"user_id":"559abb424a399b6c50327253","symptoms":"fever,cough","app_token":"test-app","ill_date":"2015-03-24T00:00:00.000Z","coordinates":[19.4958,15.1752],"createdAt":"2015-07-06T17:30:43.829Z","updatedAt":"2015-07-06T17:30:43.829Z","id":"559abb434a399b6c50327256"},{"lat":89.1378,"lon":-149.1573,"user_id":"559abb434a399b6c50327255","symptoms":"bleeding","app_token":"test-app","ill_date":"2015-01-29T00:00:00.000Z","coordinates":[-149.1573,89.1378],"createdAt":"2015-07-06T17:30:44.727Z","updatedAt":"2015-07-06T17:30:44.727Z","id":"559abb444a399b6c50327258"},{"lat":-26.2373,"lon":121.0364,"user_id":"559abb444a399b6c50327257","symptoms":"body_aches","app_token":"test-app","ill_date":"2015-02-20T00:00:00.000Z","coordinates":[121.0364,-26.2373],"createdAt":"2015-07-06T17:30:45.624Z","updatedAt":"2015-07-06T17:30:45.624Z","id":"559abb454a399b6c5032725a"},{"lat":-48.6499,"lon":2.662,"user_id":"559abb454a399b6c50327259","symptoms":"headache,cough","app_token":"test-app","ill_date":"2015-05-02T00:00:00.000Z","coordinates":[2.662,-48.6499],"createdAt":"2015-07-06T17:30:46.428Z","updatedAt":"2015-07-06T17:30:46.428Z","id":"559abb464a399b6c5032725c"},{"lat":-4.3474,"lon":13.4702,"user_id":"559abb464a399b6c5032725b","symptoms":"headache,body_aches,fever","app_token":"test-app","ill_date":"2015-02-05T00:00:00.000Z","coordinates":[13.4702,-4.3474],"createdAt":"2015-07-06T17:30:47.234Z","updatedAt":"2015-07-06T17:30:47.234Z","id":"559abb474a399b6c5032725e"},{"lat":-16.0747,"lon":168.2704,"user_id":"559abb474a399b6c5032725d","symptoms":"cough,body_aches,fever,headache","app_token":"test-app","ill_date":"2015-01-15T00:00:00.000Z","coordinates":[168.2704,-16.0747],"createdAt":"2015-07-06T17:30:48.035Z","updatedAt":"2015-07-06T17:30:48.035Z","id":"559abb484a399b6c50327260"}];
_.each(data, function(d) {
  d.symptoms = d.symptoms.split(',');
});


var labels = {
  bleeding: "Bleeding",
  body_aches: "Body aches",
  cough: "Cough",
  fever: "Fever",
  headache: "Headache"
};

// Initialise dataset

var dataset = crossfilter(data);
var all = dataset.groupAll();


// Symptoms row chart
var symptomsChart = dc.rowChart('#symptomsChart');

var reduceAdd = function(p, v) {
  v.symptoms.forEach (function(val, idx) {
     p[val] = (p[val] || 0) + 1;
  });
  return p;
}

var reduceRemove = function(p, v) {
  v.symptoms.forEach (function(val, idx) {
     p[val] = (p[val] || 0) - 1;
  });
  return p;

}

var reduceInitial = function() {
  return {};
}

var symptoms = dataset.dimension(function (d) { return d.symptoms; });
var symptomsGroup = symptoms.groupAll().reduce(reduceAdd, reduceRemove, reduceInitial).value();

// Hack from http://stackoverflow.com/a/17529113/12791
symptomsGroup.all = function() {
  var newObject = [];
  for (var key in this) {
    if (this.hasOwnProperty(key) && key != "all") {
      newObject.push({
        key: key,
        value: this[key]
      });
    }
  }
  return newObject;
}

symptomsChart.width(640)
  .height(480)
  .margins({top: 20, left: 10, right: 10, bottom: 20})
  .group(symptomsGroup)
  .dimension(symptoms)
  .filterHandler(function(dimension, filter){
    dimension.filter(function(d) { return filter != null ? _.some(d, function(s) { return _.contains(filter, s) }) : true;});
    return filter;
   })
  .label(function (d) {
    return labels[d.key];
  })
  .title(function (d) {
    return d.value
  })
  .elasticX(true);



// Data count widget

var countChart = dc.dataCount('#dataCount').dimension(dataset).group(all);

// Time series chart

var timeChart = dc.lineChart("#timeSeries");

//worldcup_data.forEach(function(d){
//  d["Date of Report"] = new Date(Date.parse(d["Date of Report"]));
//  //d3.time.format("%m/%d/%Y %I:%M").parse(d["Date of Report"]);
//  //console.log(d["Date of Report"])
//  symptoms = ["Fever","Cough","Sore Throat","Shortness of Breath","Nausea,Diarrhea",
//    "Joint Pain","Headache","Bleeding","Rash"];
//  d["symptoms"] = [];
//  for (val in symptoms){
//    if(d[symptoms[val]] == "1"){
//      d["symptoms"].push(symptoms[val]);
//      // console.log(d["symptoms"]);
//    }
//  }
//
//});

var volumeByHour = dataset.dimension(function(d) {
  return d3.time.day(new Date(d.ill_date));
});

var volumeByHourGroup = volumeByHour.group().reduceCount(function(d) {
  return d.ill_date;
});

timeChart.width(1000)
  .height(200)
  .margins({top: 10, right: 10, bottom: 20, left: 40})
  .dimension(volumeByHour)
  .group(volumeByHourGroup)
  .transitionDuration(500)
  .elasticY(true)
  .x(d3.time.scale()) //x(d3.time.scale().domain([new Date(2014, 1, 1), new Date(2014, 12, 31)]))
  .elasticX(true)
  .xAxis();

// var symptomsChart = dc.rowChart('#symptomsChart');

// var reduceAdd = function(p, v) {
//   v.symptoms.forEach (function(val, idx) {
//     p[val] = (p[val] || 0) + 1;
//   });
//   return p;
// }

// var reduceRemove = function(p, v) {
//   v.symptoms.forEach (function(val, idx) {
//     p[val] = (p[val] || 0) - 1;
//   });
//   return p;

// }

// var reduceInitial = function() {
//   return {};
// }

// var symptoms = dataset.dimension(function (d) {
//   return d.symptoms; });
// var symptomsGroup = symptoms.groupAll().reduce(reduceAdd, reduceRemove, reduceInitial).value();

// // Hack from http://stackoverflow.com/a/17529113/12791
// symptomsGroup.all = function() {
//   var newObject = [];
//   for (var key in this) {
//     if (this.hasOwnProperty(key) && key != "all") {
//       newObject.push({
//         key: key,
//         value: this[key]
//       });
//     }
//   }
//   return newObject;
// }

// symptomsChart.width(1000)
//   .height(200)
//   .margins({top: 20, left: 10, right: 10, bottom: 20})
//   .group(symptomsGroup)
//   .dimension(symptoms)
//   .filterHandler(function(dimension, filter){
//     dimension.filter(function(d) { return filter != null ? _.some(d, function(s) { return _.contains(filter, s) }) : true;});
//     return filter;
//   })
//   .elasticX(true)
//   .label(function (d) {
//     return d.key;
//   })
//   .title(function (d) {
//     return d.value;
//   });



// Data count widget

//var countChart = dc.dataCount('#dataCount').dimension(crossfiltered).groupAll();


// Go!

dc.renderAll();
