
$(document).ready(function() {

var margin = {top: 30, right: 40, bottom: 50, left: 50},
    width = 600 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;

var x =  d3.scale.linear().range([0, width]);
var y0 = d3.scale.linear().range([height, 0]);
var y1 = d3.scale.linear().range([height, 0]);
var y2 = d3.scale.linear().range([height, 0]);
var y3 = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis().scale(x)
.orient("bottom").tickFormat(function(d) {
    return (d/1);} ).ticks(5);

var yAxisLeft = d3.svg.axis().scale(y0)
    .orient("left").ticks(5);

var yAxisRight = d3.svg.axis().scale(y1)
    .orient("right").ticks(5);

var valueline = d3.svg.line()
    .x(function(d) { return x(d.term); })
    .y(function(d) { return y0(d.cetotal); });

var valueline2 = d3.svg.line()
    .x(function(d) { return x(d.term); })
    .y(function(d) { return y1(d.cstotal); });

var valueline3 = d3.svg.line()
    .x(function(d) { return x(d.term); })
    .y(function(d) { return y2(d.percentce); });

var valueline4 = d3.svg.line()
    .x(function(d) { return x(d.term); })
    .y(function(d) { return y3(d.percentcs); });

var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

  // Add the text label for the left Y axis
svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left-3)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("fill", "steelblue")
        .text("total # students");

svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 + width+margin.left-25)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("fill", "tomato")
        .text("% females");

svg.append("text")
        .attr("y", 0 + height + 30)
        .attr("x",0 + width / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("term");

// Get the data
d3.csv("enrollments.csv", function(error, data) {
    data.forEach(function(d) {
        d.term = parseInt(d.term);
        d.cemale = +d.cemale;
        d.cefemale = +d.cefemale;
        d.csmale = +d.csmale;
        d.csfemale = +d.csfemale;
      d.cetotal = (+d.cemale) + (+d.cefemale);
      d.cstotal = (+d.csmale)+(+d.csfemale);
      d.percentce = ((+d.cefemale)/(+d.cetotal))*100;
      d.percentcs = ((+d.csfemale)/(+d.cstotal))*100;

    });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.term; }));
    y0.domain([0, d3.max(data, function(d) {
		return Math.max(d.cemale,d.cefemale,d.csmale,d.csfemale,450); })]);
    y1.domain([0, d3.max(data, function(d) {
		return Math.max(0,450); })]);
    y2.domain([0, d3.max(data, function(d) {
		return Math.max(0,450); })]);
    y3.domain([0, d3.max(data, function(d) {
    return Math.max(0,15); })]);


    svg.append("path")        // Add the valueline path.
        .attr("d", valueline(data));

    svg.append("path")        // Add the valueline2 path.
        .style("stroke", "tomato")
         .style("stroke-dasharray", ("3, 3"))
        .attr("d", valueline2(data));

  svg.append("path")        // Add the valueline3 path.
        .style("stroke", "tomato")
        .style("stroke-dasharray", ("3, 3"))
        .attr("d", valueline3(data));

  svg.append("path")        // Add the valueline4 path.
        .style("stroke", "tomato")
        .style("stroke-dasharray", ("3, 3"))
        .attr("d", valueline4(data));

    svg.append("g")            // Add the X Axis
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .style("fill", "steelblue")
        .call(yAxisLeft);

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + width + " ,0)")
        .style("fill", "tomato")
        .call(yAxisRight);

});

});
