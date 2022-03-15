const visObject = {

	updateAsync: function(data, element, config, queryResponse, details, doneRendering){

	console.log(data)
	// set the dimensions and margins of the graph
	var margin = {top: 10, right: 30, bottom: 30, left: 60},
		width = 1013 - margin.left - margin.right,
		height = 431 - margin.top - margin.bottom;

	// append the svg object to the body of the page
	var svg = d3.select("#vis").append('div').attr('id', 'chart').style('display', 'inline-block').style('margin-right', '40px')
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");

	var divGroup = [
		{
			"class": "topLeft",
			"transform": 'translate(0px, 0px)',
			"color": "#f29696", //red
			"text": "Improve"
		}, {
			"class": "topRight",
			"transform": 'translate(478px, 0px)',
			"color": "#bddaa5", //green
			"text": "Leverage"
		}, {
			"class": "bottomLeft",
			"transform": 'translate(0px, 196px)',
			"color": "#f7e39c", //yellow
			"text": "Monitor"
		}, {
			"class": "bottomRight",
			"transform": 'translate(478px, 196px)',
			"color": "#d5e8ff", //blue
			"text": "Maintain"
		}
	];

	var formattedData = [
		{
			"color": data.map((d,i)=> {
				if(d['ABS Correlation Coefficient (NPS)'] > 0.5 && d['Average Rating'] < 7.25) {
					return "#f29696"
				}
				if(d['ABS Correlation Coefficient (NPS)'] < 0.5 && d['Average Rating'] < 7.25) {
					return "#f7e39c"
				}
				if (d['ABS Correlation Coefficient (NPS)'] > 0.5 && d['Average Rating'] > 7.25) {
					return "#bddaa5"
				}
				return "#d5e8ff"
			}),
			"subject": data.map((d,i) => d['Subject'])
		}
	];
	var twoDimontion = [
		{
			"color": formattedData[0].color[0],
			"subject": formattedData[0].subject[0]
		},    
		{
			"color": formattedData[0].color[1],
			"subject": formattedData[0].subject[1]
		},    
		{
			"color": formattedData[0].color[2],
			"subject": formattedData[0].subject[2]
		},    
		{
			"color": formattedData[0].color[3],
			"subject": formattedData[0].subject[3]
		},    
		{
			"color": formattedData[0].color[4],
			"subject": formattedData[0].subject[4]
		},    
		{
			"color": formattedData[0].color[5],
			"subject": formattedData[0].subject[5]
		},    
		{
			"color": formattedData[0].color[6],
			"subject": formattedData[0].subject[6]
		},    
		{
			"color": formattedData[0].color[7],
			"subject": formattedData[0].subject[7]
		},    
		{
			"color": formattedData[0].color[8],
			"subject": formattedData[0].subject[8]
		},    
		{
			"color": formattedData[0].color[9],
			"subject": formattedData[0].subject[9]
		}
	]

	const minX = d3.min(data, d => d['Average Rating'])
	const maxX = d3.max(data, d => d['Average Rating'])

	const minY = d3.min(data, d => d['ABS Correlation Coefficient (NPS)'])
	const maxY = d3.max(data, d => d['ABS Correlation Coefficient (NPS)'])

	//   Add X axis
	var x = d3.scaleLinear()
		.domain([minX, maxX])
		.range([ 0, width]);
		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));

	// Add Y axis
	var y = d3.scaleLinear()
		.domain([0, 1])
		.range([height, 0]);
		svg.append("g")
			.call(d3.axisLeft(y));

	//colored boxes with text inside
	svg.append('g')
		.selectAll("foreignObject")
		.data(divGroup)
		.enter()
		.append("foreignObject")
			.attr('class', function (d) {return d.class;})
			.style('background-color', function (d) {return d.color})
			.style('width', '50%')
			.style('height', '196.25px')
			.style("transform", function (d) {return d.transform})
		.append("xhtml:body")
		.html(d => d.text);

	var tooltip = d3.select("#chart")
		.data(data)
		.append("div")
		.style("visibility", "hidden")
		// .attr("class", "tooltip")
		.style("style", 'fit-content')
		.style("background-color", 'white')
		.style('border', '1px solid')
		.style('border-radius', '5px')
		.style('padding', '10px')
		.style('position', 'absolute')
		.style('z-index', '3')
		.style("top", d => d['ABS Correlation Coefficient (NPS)'])
		.style("bottom", d => d['Average Rating']);

	var mouseover = function(d) {
		tooltip
			.style("visibility", "visible")
	}

	var mousemove = function(d) {
		tooltip
		.html(d['Subject'] + "<br><br>Ratings: " + d['Ratings'] + "<br>Priority Score: " + d['Priority Score'] + "<br><br> ABS Correlation Coefficient (NPS) is: " + d['ABS Correlation Coefficient (NPS)'] + "<br> Average Rating is: " + d['Average Rating'])
		.style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
		.style("top", (d3.mouse(this)[1]) + "px")
	}

	var mouseleave = function(d) {
		tooltip
		.transition()
		.duration(100)
		.style("visibility", "hidden")
	}

	// Circles with text inside
	svg.append('g')
		.selectAll("foreignObject")
		.data(data.filter(function(d,i){return i<50})) // the .filter part is just to keep a few dots on the chart, not all of them
		.enter()
		.append("foreignObject")
			.attr("x", d => { return x(d['Average Rating']); } )
			.attr("y", d => { return y(d['ABS Correlation Coefficient (NPS)']); } )
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
		.append("xhtml:body")
			.html((d, i) => i + 1)
			.style('margin', 'auto')
			.style('text-align', 'center')
			.style('padding-top', "3px");

	// Ranking column
	var rankingContainer = d3.select("#vis").style('display', 'flex').append('div').attr('id', 'ranking').style('position', 'relative')
	.style('display', 'inline-blck')

	var pairContainer = rankingContainer.selectAll(null).data(twoDimontion).enter().append('div')

	pairContainer.append('div')
		.style('width', '25px')
		.style('height', '25px')
		.style('background-color',  d => d.color)
		.style('border', '1px solid #333')
		.style('border-radius', '100%')
		.style('margin-bottom', '13px')
		.style('display', 'inline-flex')
		.style('align-items', 'center')
		.style('justify-content', 'center')
		.html((d, i) => i+1)

		.select(function() { return this.parentNode; }).append('p')
		.text( d => d.subject)
		.style('display', 'inline-flex')
		.style('margin-left', '10px');

		doneRendering()
	}
};

looker.plugins.visualizations.add(visObject);