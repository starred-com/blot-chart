const visObject = {
  updateAsync: function (
    data,
    element,
    config,
    queryResponse,
    details,
    doneRendering
  ) {

console.log(data)

element.innerHTML = ""

 // set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 850 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#vis")
            .style('font-family', 'Open Sans, sans-serif')
            .style('color', 'rgb(105, 105, 105)')
            .append('div')
            .attr('id', 'chart')
            .style('display', 'inline-block')
            .style('margin-right', '40px')
            .style('position', 'relative')
              .append("svg")
                .attr('overflow', 'visible')
                .attr("width", '100%' )
                // .attr("height", height + margin.top + margin.bottom)
                .attr("height", '100vh')
                .attr("max-height", '950px')
                .attr('viewBox', '0 0 815 800');

var visual = svg.append("g")
                .attr("transform", "translate(" + 30 + "," + margin.top + ")");

var legend = svg.append("g")
                .attr("transform", "translate(" + 840 + "," + margin.top + ")");

var legendTypo = svg.append("g")
                  .attr("transform", "translate(" + 880 + "," + margin.top + ")");

var divGroup = [
    {
      "class": "topLeft",
      "transform": 'translate(0px, 0px)',
      "color": "#f29696",
      "text": "Improve",
      "alignment": "left"
  }, {
      "class": "topRight",
      "transform": 'translate(401px, 0px)',
      "color": "#bddaa5",
      "text": "Leverage",
      "alignment": "end"
  }, {
      "class": "bottomLeft",
      "transform": 'translate(0px, 261px)',
      "color": "#f7e39c",
      "text": "Monitor",
      "alignment": "left"
  }, {
      "class": "bottomRight",
      "transform": 'translate(401px, 261px)',
      "color": "#d5e8ff",
      "text": "Maintain",
      "alignment": "end"
  },
];

var colorMatcher = {
  color: data.map((d)=> {
      if(d['fact_table.abs_correlation_coefficient']['value'] > 0.5 && d['fact_table.avg_star_rating']['value'] < 7.25) {
          return "#f29696"
      }
      if(d['fact_table.abs_correlation_coefficient']['value'] < 0.5 && d['fact_table.avg_star_rating']['value'] < 7.25) {
          return "#f7e39c"
      }
      if (d['fact_table.abs_correlation_coefficient']['value'] > 0.5 && d['fact_table.avg_star_rating']['value'] > 7.25) {
          return "#bddaa5"
      }
      return "#d5e8ff"
  })
};

const minX = d3.min(data, d => d['fact_table.avg_star_rating']['rendered'])
const maxX = d3.max(data, d => d['fact_table.avg_star_rating']['rendered'])

const minY = d3.min(data, d => d['fact_table.abs_correlation_coefficient']['rendered'])
const maxY = d3.max(data, d => d['fact_table.abs_correlation_coefficient']['rendered'])

//   Add X axis
var x = d3.scaleLinear()
    .domain([minX, maxX])
    .range([ 0, width]);
    visual.append("g")
        .attr("transform", "translate(0," + (height+2) + ")")
        .call(d3.axisBottom(x))
        .call(g => g.select(".domain").remove());

// Add Y axis
var y = d3.scaleLinear()
    .domain([0, 1])
    .range([height, 0]);
    visual.append("g")
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove());

//colored boxes with text inside
visual.append('g')
    .selectAll("foreignObject")
    .data(divGroup)
    .enter()
    .append("foreignObject")
        .attr('class', function (d) {return d.class;})
        .attr("fill", function (d) {return d.color})
        .style('background-color', function (d) {return d.color})
        .style('width', '47%')
        .style('height', '250px')
        .style("padding", "5px")
        .style('border-radius', '10px')
        .style("transform", function (d) {return d.transform})
    .append("xhtml:div")
    .style('background-color', function (d) {return d.color})
    .style("height", "100%")
    .style("text-align", function (d) {return d.alignment})
    .html(d => d.text);

var tooltip = d3.select("#chart")
  .data(data)
  .append("foreignObject")
  .style("visibility", "hidden")
  .style("font-size", '12px')
  .style("background-color", 'rgba(34, 42, 60, 0.9)')
  .style('color', '#ffffff')
  .style('border-radius', '5px')
  .style('padding', '10px')
  .style('position', 'absolute')
  .style('z-index', '3')
  .style('width', 'fit-content');

var mousemove = function(d) {
  tooltip
    .html(
        `<strong style="font-size: 14px">${d['questions.subject']['value']}</strong>` + 
        "<br><br>Ratings: " + 
        `<strong style="font-size: 13px">${d["fact_table.ratings"]['value']}</strong>` + 
        "<br>Priority Score: " + 
        `<strong style="font-size: 13px">${Math.ceil(d['fact_table.priority_score']['value'])}</strong>` + 
        "<br><br> Correlation (NPS): " + 
        `<strong style="font-size: 13px">${d['fact_table.abs_correlation_coefficient']['rendered']}</strong>` + 
        "<br> Average Rating: " + 
        `<strong style="font-size: 13px">${d['fact_table.avg_star_rating']['rendered']}</strong>`
        )
    .style("left", (d3.event.pageX) + "px")
    .style("top", (d3.event.pageY) + "px")
}

var mouseleave = function(d) {
  tooltip
    .transition()
    .duration(100)
    .style("visibility", "hidden")
}

// Circles with text inside
visual.append('g')
  .selectAll("foreignObject")
  .data(data) // the .filter part is just to keep a few dots on the chart, not all of them
  .enter()
  .append("foreignObject")
      .attr("x", d => { return x(d['fact_table.avg_star_rating']['rendered']) - 10 } )
      .attr("y", d => { return y(d['fact_table.abs_correlation_coefficient']['rendered']) - 10 } )
      // .attr('class', 'blot')
      .style('border-radius', '100%')
      .style('background-color', 'rgb(255, 255, 255)')
      .style('border', '1px solid rgb(51, 51, 51)')
      .style('width', '25px')
      .style('height', '25px')
      .style('cursor', 'default')
      
      // hover
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
  // add text inside the circle    
  .append("xhtml:div")
      .html((d, i) => i + 1)
      .style('margin', 'auto')
      .style('text-align', 'center')
      .style('background-color', 'rgb(255, 255, 255)')
      .style('height', '100%')
      .style('display', 'flex')
      .style('justify-content', 'center')
      .style('align-item', 'center');

      var legendCircle = legend.selectAll('foreignObject')
      .data(colorMatcher.color)
      .enter();
  
// Legend section
legendCircle.append('foreignObject')
    .attr('x', 0 )
    .attr('y', function(d, i) { return i*40; })
    .style('background-color', function(d, i) {return d})
    .style('width', '25px')
    .style('height', '25px')
    .style('border-radius', '100%')
    .append("xhtml:div")
    .style('width', '25px')
    .style('height', '25px')
    .style('display', 'flex')
    .style('justify-content', 'center')
    .style('align-content', 'center')
    .html(function(d, i) { return i + 1 });

legendTypo.selectAll('foreignObject')
    .data(data)
    .enter()
    .append('foreignObject')
    .attr('x', 0 )
    .attr('y', function(d, i) { return i*40 })
    .style('width', '300px')
    .style('height', '25px')
    .append("xhtml:div")
    .style('width', '300px')
    .style('height', '25px')
    .html(function(d, i) { return d['questions.subject']['html'] });

    doneRendering();
  },
};

looker.plugins.visualizations.add(visObject);
