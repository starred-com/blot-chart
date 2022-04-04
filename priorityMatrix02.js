const visObject = {
  updateAsync: function (
    data,
    element,
    config,
    queryResponse,
    details,
    doneRendering
  ) {
    
element.innerHTML = ""
    
console.log(data)
console.log(queryResponse)

const questionSubject = queryResponse.fields.dimensions[0].name //questions.subject
const ratings = queryResponse.fields.measures[0].name //fact_table.ratings
const priorityScore = queryResponse.fields.measures[1].name //fact_table.priority_score
const absCorrelation = queryResponse.fields.measures[2].name //fact_table.abs_correlation_coefficient
const averageRating = queryResponse.fields.measures[3].name //fact_table.avg_star_rating

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
            .style('position', 'relative')
              .append("svg")
                .attr('overflow', 'visible')
                .attr("width", '100%' )
                // .attr("height", height + margin.top + margin.bottom)
                .attr("height", '100vh')
                .attr("max-height", '950px')
                .attr('viewBox', '0 0 1110 600');

var visual = svg.append("g")
                .attr("transform", "translate(" + 30 + "," + margin.top + ")");

var legend = svg.append("g")
                .attr("transform", "translate(" + 820 + "," + margin.top + ")");

var legendTypo = svg.append("g")
                  .attr("transform", "translate(" + 860 + "," + margin.top + ")");

var divGroup = [
    {
      "class": "topLeft",
      "transform": 'translate(0px, 0px)',
      "color": "#f29696", // red
      "text": "Improve",
      "alignment": "left"
  }, {
      "class": "topRight",
      "transform": 'translate(401px, 0px)',
      "color": "#bddaa5", // green
      "text": "Leverage",
      "alignment": "end"
  }, {
      "class": "bottomLeft",
      "transform": 'translate(0px, 261px)',
      "color": "#f7e39c", // yellow
      "text": "Monitor",
      "alignment": "left"
  }, {
      "class": "bottomRight",
      "transform": 'translate(401px, 261px)',
      "color": "#d5e8ff", // blue
      "text": "Maintain",
      "alignment": "end"
  },
];

var avgRating = data.map((d,i) => {
  return parseFloat(d[averageRating]['rendered'])
})

avgRating = avgRating.sort()

function middle(arr) {
  if (arr.length === 0) return undefined;
      return arr[Math.floor(arr.length / 2)];
}
// taking the middle value of an array and + 0.1 becaouse of the space and to be precizely in the mid
avgRating = middle(avgRating) + 0.1

var colorMatcher = {
  color: data.map((d)=> {
      if(d[absCorrelation]['value'] >= 0.5 && d[averageRating]['value'] <= avgRating) {
          return "#f29696" // red
      }
      if(d[absCorrelation]['value'] <= 0.5 && d[averageRating]['value'] <= avgRating) {
          return "#f7e39c" // yellow
      }
      if (d[absCorrelation]['value'] >= 0.5 && d[averageRating]['value'] >= avgRating) {
          return "#bddaa5" // green
      }
      if (d[absCorrelation]['value'] <= 0.5 && d[averageRating]['value'] >= avgRating) {
        return "#d5e8ff" // blue
      }
  })
};

const minX = d3.min(data, d => d[averageRating]['rendered'])
const maxX = d3.max(data, d => d[averageRating]['rendered'])

//   Add X axis
var x = d3.scaleLinear()
    .domain([minX, maxX])
    .range([ 0, width]).nice();
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
        .style('width', (width / 2) - 5 + 'px')
        .style('height', '250px')
        .style("padding", "5px")
        .style('border-radius', '10px')
        .style("transform", function (d) {return d.transform})
    .append("xhtml:div")
    .style('background-color', function (d) {return d.color})
    .style("height", "100%")
    .style("padding", "5px")
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
  .style('width', '160px');

var mouseover = function(d) {
  tooltip.style("visibility", "visible")
}

var mousemove = function(d) {
  tooltip
    .html(
        `<strong style="font-size: 14px">${d[questionSubject]['value']}</strong>` + 
        "<br><br>Ratings: " + 
        `<strong style="font-size: 13px">${d[ratings]['value']}</strong>` + 
        "<br>Priority Score: " + 
        `<strong style="font-size: 13px">${Math.ceil(d[priorityScore]['value'])}</strong>` + 
        "<br><br> Correlation (NPS): " + 
        `<strong style="font-size: 13px">${d[absCorrelation]['rendered']}</strong>` + 
        "<br> Average Rating: " + 
        `<strong style="font-size: 13px">${d[averageRating]['rendered']}</strong>`
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
      .attr("x", d => { return x(d[averageRating]['rendered']) - 10 } )
      .attr("y", d => { return y(d[absCorrelation]['rendered']) - 10 } )
      // .attr('class', 'blot')
      .style('-moz-box-shadow', ' 1px 2px 4px 0px rgba(0,0,0,0.60)')
      .style('-webkit-box-shadow', ' 1px 2px 4px 0px rgba(0,0,0,0.60)')
      .style('box-shadow', ' 1px 2px 4px 0px rgba(0,0,0,0.60)')
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
      .style('background-color', 'rgb(255, 255, 255)')
      .style('border', '1px solid rgb(51, 51, 51)')
      .style('height', '100%')
      .style('border-radius', '100%')
      .style('display', 'flex')
      .style('justify-content', 'center')
      .style('align-items', 'center');

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
    .style('align-items', 'center')
    .style('background-color', function(d, i) {return d})
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
    .html(function(d, i) { return d[questionSubject]['value'] });

    doneRendering();
  },
};

looker.plugins.visualizations.add(visObject);
