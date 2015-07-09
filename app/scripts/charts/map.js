// Maps
var regions, regionsGroup;

d3.json("data/rio_aps.geojson", function(geojson) {
  var buildMap = function(target, dataset) {
    regions = dataset.dimension(function(d) {
      return d.region;
    });
    regionsGroup = regions.group();

    var width = 850, height = 350;
    var projection = d3.geo.mercator()
      .center([-43.30, -23.00])
      .scale(45000);

    var chart = dc.geoChoroplethChart(target)
      .width(width)
      .height(height)
      .dimension(regions)
      .group(regionsGroup)
      .colorAccessor(function (d) { return d; })
      .overlayGeoJson(geojson.features, "region", function (d) {
          return d.properties.NOME;
      })
     .projection(projection)
      .title(function (d) {
          return "Region: " + d.key + "\nCount: " + (d.value || 0);
      });
    setDefaultColors(chart, regionsGroup);
    return chart;
  }

  var syndromesMap = buildMap('#syndromesMap', syndromesDataset);
  var symptomsMap = buildMap('#symptomsMap', symptomsDataset);

  syndromesMap.render();
  symptomsMap.render();
});
