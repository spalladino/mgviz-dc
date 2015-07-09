// Utils
var setDefaultColors = function(chart, group) {
  var range = [0, group.top(1)[0].value];
  return chart.colors(d3.scale.quantize().domain(range).range(["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#0061B5"]))
};

function changeDate(timeFrame, chart){
	switch(timeFrame){
		case "thisweek":
			var range = [new Date(maxDate-7*24*60*60*1000), maxDate];
			chart.focus(range);
			break;
		case "last24":
			var range = [new Date(maxDate-1*24*60*60*1000), maxDate];
			chart.focus(range);
			break;
		case "reset":
			chart.focus(null);
			dc.redrawAll();
			break;
	}
}
