
// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
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
                .attr('viewBox', '0 0 816 550');

var visual = svg.append("g")
                .attr("transform", "translate(" + 30 + "," + margin.top + ")");

var legend = svg.append("g")
                .attr("transform", "translate(" + 840 + "," + margin.top + ")");

var legendTypo = svg.append("g")
.attr("transform", "translate(" + 880 + "," + margin.top + ")");

var newData = [
    {
        "survey_question.subject": {
            "value": "Preparation of interview(s)",
            "links": [
                {
                    "label": "by Response Comment",
                    "label_prefix": "by",
                    "label_value": "Response Comment",
                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Preparation+of+interview%28s%29&sorts=survey_question.ratings desc&limit=500&column_limit=50",
                    "type": "drill",
                    "type_label": "Drill into Preparation of interview(s)",
                    "type_label_prefix": "Drill into",
                    "type_label_value": "Preparation of interview(s)"
                }
            ],
            "html": "Preparation of interview(s) "
        },
        "survey_question.ratings": {
            "value": 129
        },
        "survey_question.priority_score": {
            "value": 54.26312316788588
        },
        "survey_question.abs_correlation_coefficient": {
            "value": 0.5963624154949702,
            "rendered": "0.60",
            "html": "3. Preparation of interview(s) 0.60 "
        },
        "survey_question.avg_rating": {
            "value": 6.387596899224806,
            "rendered": "6.4"
        }
    },
    {
        "survey_question.subject": {
            "value": "Proficiency interviewer",
            "links": [
                {
                    "label": "by Response Comment",
                    "label_prefix": "by",
                    "label_value": "Response Comment",
                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Proficiency+interviewer&sorts=survey_question.ratings desc&limit=500&column_limit=50",
                    "type": "drill",
                    "type_label": "Drill into Proficiency interviewer",
                    "type_label_prefix": "Drill into",
                    "type_label_value": "Proficiency interviewer"
                }
            ],
            "html": "Proficiency interviewer "
        },
        "survey_question.ratings": {
            "value": 124
        },
        "survey_question.priority_score": {
            "value": 33.86156756442392
        },
        "survey_question.abs_correlation_coefficient": {
            "value": 0.6561336884738872,
            "rendered": "0.66",
            "html": "1. Proficiency interviewer 0.66 "
        },
        "survey_question.avg_rating": {
            "value": 7.362903225806452,
            "rendered": "7.4"
        }
    },
    {
        "survey_question.subject": {
            "value": "Proficiency recruiter",
            "links": [
                {
                    "label": "by Response Comment",
                    "label_prefix": "by",
                    "label_value": "Response Comment",
                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Proficiency+recruiter&sorts=survey_question.ratings desc&limit=500&column_limit=50",
                    "type": "drill",
                    "type_label": "Drill into Proficiency recruiter",
                    "type_label_prefix": "Drill into",
                    "type_label_value": "Proficiency recruiter"
                }
            ],
            "html": "Proficiency recruiter "
        },
        "survey_question.ratings": {
            "value": 123
        },
        "survey_question.priority_score": {
            "value": 27.126708598970215
        },
        "survey_question.abs_correlation_coefficient": {
            "value": 0.6133124715368126,
            "rendered": "0.61",
            "html": "2. Proficiency recruiter 0.61 "
        },
        "survey_question.avg_rating": {
            "value": 7.504065040650406,
            "rendered": "7.5"
        }
    },
    {
        "survey_question.subject": {
            "value": "Quick response",
            "links": [
                {
                    "label": "by Response Comment",
                    "label_prefix": "by",
                    "label_value": "Response Comment",
                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Quick+response&sorts=survey_question.ratings desc&limit=500&column_limit=50",
                    "type": "drill",
                    "type_label": "Drill into Quick response",
                    "type_label_prefix": "Drill into",
                    "type_label_value": "Quick response"
                }
            ],
            "html": "Quick response "
        },
        "survey_question.ratings": {
            "value": 117
        },
        "survey_question.priority_score": {
            "value": 17.398356024544675
        },
        "survey_question.abs_correlation_coefficient": {
            "value": 0.3746599881966946,
            "rendered": "0.37",
            "html": "4. Quick response 0.37 "
        },
        "survey_question.avg_rating": {
            "value": 7.042735042735043,
            "rendered": "7.0"
        }
    },
    {
        "survey_question.subject": {
            "value": "Quick and easy application form",
            "links": [
                {
                    "label": "by Response Comment",
                    "label_prefix": "by",
                    "label_value": "Response Comment",
                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Quick+and+easy+application+form&sorts=survey_question.ratings desc&limit=500&column_limit=50",
                    "type": "drill",
                    "type_label": "Drill into Quick and easy application form",
                    "type_label_prefix": "Drill into",
                    "type_label_value": "Quick and easy application form"
                }
            ],
            "html": "Quick and easy application form "
        },
        "survey_question.ratings": {
            "value": 104
        },
        "survey_question.priority_score": {
            "value": 2.46613501750342
        },
        "survey_question.abs_correlation_coefficient": {
            "value": 0.11903264488393805,
            "rendered": "0.12",
            "html": "10. Quick and easy application form 0.12 "
        },
        "survey_question.avg_rating": {
            "value": 7.528846153846154,
            "rendered": "7.5"
        }
    },
    {
        "survey_question.subject": {
            "value": "Easy to find job online",
            "links": [
                {
                    "label": "by Response Comment",
                    "label_prefix": "by",
                    "label_value": "Response Comment",
                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Easy+to+find+job+online&sorts=survey_question.ratings desc&limit=500&column_limit=50",
                    "type": "drill",
                    "type_label": "Drill into Easy to find job online",
                    "type_label_prefix": "Drill into",
                    "type_label_value": "Easy to find job online"
                }
            ],
            "html": "Easy to find job online "
        },
        "survey_question.ratings": {
            "value": 103
        },
        "survey_question.priority_score": {
            "value": 2.035884017394471
        },
        "survey_question.abs_correlation_coefficient": {
            "value": 0.14920264636152908,
            "rendered": "0.15",
            "html": "8. Easy to find job online 0.15 "
        },
        "survey_question.avg_rating": {
            "value": 8.058252427184467,
            "rendered": "8.1"
        }
    },
    {
        "survey_question.subject": {
            "value": "Speed of the process",
            "links": [
                {
                    "label": "by Response Comment",
                    "label_prefix": "by",
                    "label_value": "Response Comment",
                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Speed+of+the+process&sorts=survey_question.ratings desc&limit=500&column_limit=50",
                    "type": "drill",
                    "type_label": "Drill into Speed of the process",
                    "type_label_prefix": "Drill into",
                    "type_label_value": "Speed of the process"
                }
            ],
            "html": "Speed of the process "
        },
        "survey_question.ratings": {
            "value": 95
        },
        "survey_question.priority_score": {
            "value": 13.663879946546723
        },
        "survey_question.abs_correlation_coefficient": {
            "value": 0.267321995235979,
            "rendered": "0.27",
            "html": "6. Speed of the process 0.27 "
        },
        "survey_question.avg_rating": {
            "value": 6.631578947368421,
            "rendered": "6.6"
        }
    },
    {
        "survey_question.subject": {
            "value": "Planning of interview(s)",
            "links": [
                {
                    "label": "by Response Comment",
                    "label_prefix": "by",
                    "label_value": "Response Comment",
                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Planning+of+interview%28s%29&sorts=survey_question.ratings desc&limit=500&column_limit=50",
                    "type": "drill",
                    "type_label": "Drill into Planning of interview(s)",
                    "type_label_prefix": "Drill into",
                    "type_label_value": "Planning of interview(s)"
                }
            ],
            "html": "Planning of interview(s) "
        },
        "survey_question.ratings": {
            "value": 95
        },
        "survey_question.priority_score": {
            "value": 11.427383854772343
        },
        "survey_question.abs_correlation_coefficient": {
            "value": 0.269410281963735,
            "rendered": "0.27",
            "html": "5. Planning of interview(s) 0.27 "
        },
        "survey_question.avg_rating": {
            "value": 6.936842105263158,
            "rendered": "6.9"
        }
    },
    {
        "survey_question.subject": {
            "value": "Useful job advertisement",
            "links": [
                {
                    "label": "by Response Comment",
                    "label_prefix": "by",
                    "label_value": "Response Comment",
                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Useful+job+advertisement&sorts=survey_question.ratings desc&limit=500&column_limit=50",
                    "type": "drill",
                    "type_label": "Drill into Useful job advertisement",
                    "type_label_prefix": "Drill into",
                    "type_label_value": "Useful job advertisement"
                }
            ],
            "html": "Useful job advertisement "
        },
        "survey_question.ratings": {
            "value": 80
        },
        "survey_question.priority_score": {
            "value": -1.5785995416691625
        },
        "survey_question.abs_correlation_coefficient": {
            "value": 0.13615688467777493,
            "rendered": "0.14",
            "html": "9. Useful job advertisement 0.14 "
        },
        "survey_question.avg_rating": {
            "value": 7.2,
            "rendered": "7.2"
        }
    },
    {
        "survey_question.subject": {
            "value": "Amount of communication",
            "links": [
                {
                    "label": "by Response Comment",
                    "label_prefix": "by",
                    "label_value": "Response Comment",
                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Amount+of+communication&sorts=survey_question.ratings desc&limit=500&column_limit=50",
                    "type": "drill",
                    "type_label": "Drill into Amount of communication",
                    "type_label_prefix": "Drill into",
                    "type_label_value": "Amount of communication"
                }
            ],
            "html": "Amount of communication "
        },
        "survey_question.ratings": {
            "value": 54
        },
        "survey_question.priority_score": {
            "value": 6.112197150687439
        },
        "survey_question.abs_correlation_coefficient": {
            "value": 0.17732293590418277,
            "rendered": "0.18",
            "html": "7. Amount of communication 0.18 "
        },
        "survey_question.avg_rating": {
            "value": 7,
            "rendered": "7.0",
            "filterable_value": "7.0"
        }
    }
];

var data = [
  {
    "Subject": "Preparation of interview(s)",
    "Ratings": "129",
    "Priority Score": "54.26312316788588",
    "ABS Correlation Coefficient (NPS)": "0.60",
    "Average Rating": "6.4",
  },
  {
    "Subject": "Proficiency interviewer",
    "Ratings": "124",
    "Priority Score": "33.86156756442392",
    "ABS Correlation Coefficient (NPS)": "0.66",
    "Average Rating": "7.4",
  },
  {
    "Subject": "Proficiency recruiter",
    "Ratings": "123",
    "Priority Score": "27.126708598970215",
    "ABS Correlation Coefficient (NPS)": "0.61",
    "Average Rating": "7.5",
  },
  {
    "Subject": "Quick response",
    "Ratings": "117",
    "Priority Score": "17.398356024544675",
    "ABS Correlation Coefficient (NPS)": "0.37",
    "Average Rating": "7.0",
  },
  {
    "Subject": "Speed of the process",
    "Ratings": "95",
    "Priority Score": "13.663879946546723",
    "ABS Correlation Coefficient (NPS)": "0.27",
    "Average Rating": "6.6",
  },
  {
    "Subject": "Planning of interview(s)",
    "Ratings": "95",
    "Priority Score": "11.427383854772343",
    "ABS Correlation Coefficient (NPS)": "0.27",
    "Average Rating": "6.9",
  },
  {
    "Subject": "Amount of communication",
    "Ratings": "54",
    "Priority Score": "6.112197150687439",
    "ABS Correlation Coefficient (NPS)": "0.18",
    "Average Rating": "7.0",
  },
  {
    "Subject": "Quick and easy application form",
    "Ratings": "104",
    "Priority Score": "2.46613501750342",
    "ABS Correlation Coefficient (NPS)": "0.12",
    "Average Rating": "7.5",
  },
  {
    "Subject": "Easy to find job online",
    "Ratings": "103",
    "Priority Score": "2.035884017394471",
    "ABS Correlation Coefficient (NPS)": "0.15",
    "Average Rating": "8.1",
  },
  {
    "Subject": "Useful job advertisement",
    "Ratings": "80",
    "Priority Score": "-1.5785995416691625",
    "ABS Correlation Coefficient (NPS)": "0.14",
    "Average Rating": "7.2",
  },
];

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
    color: newData.map((d)=> {
        if(d['survey_question.abs_correlation_coefficient']['value'] > 0.5 && d['survey_question.avg_rating']['value'] < 7.25) {
            return "#f29696"
        }
        if(d['survey_question.abs_correlation_coefficient']['value'] < 0.5 && d['survey_question.avg_rating']['value'] < 7.25) {
            return "#f7e39c"
        }
        if (d['survey_question.abs_correlation_coefficient']['value'] > 0.5 && d['survey_question.avg_rating']['value'] > 7.25) {
            return "#bddaa5"
        }
        return "#d5e8ff"
    })
};

const minX = d3.min(newData, d => d['survey_question.avg_rating']['rendered'])
const maxX = d3.max(newData, d => d['survey_question.avg_rating']['rendered'])

const minY = d3.min(newData, d => d['survey_question.abs_correlation_coefficient']['rendered'])
const maxY = d3.max(newData, d => d['survey_question.abs_correlation_coefficient']['rendered'])

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
    .data(newData)
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
          `<strong style="font-size: 14px">${d['survey_question.subject']['value']}</strong>` + 
          "<br><br>Ratings: " + 
          `<strong style="font-size: 13px">${d["survey_question.ratings"]['value']}</strong>` + 
          "<br>Priority Score: " + 
          `<strong style="font-size: 13px">${Math.ceil(d['survey_question.priority_score']['value'])}</strong>` + 
          "<br><br> Correlation (NPS): " + 
          `<strong style="font-size: 13px">${d['survey_question.abs_correlation_coefficient']['rendered']}</strong>` + 
          "<br> Average Rating: " + 
          `<strong style="font-size: 13px">${d['survey_question.avg_rating']['rendered']}</strong>`
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
console.log(newData)
// Circles with text inside
visual.append('g')
    .selectAll("foreignObject")
    .data(newData) // the .filter part is just to keep a few dots on the chart, not all of them
    .enter()
    .append("foreignObject")
        .attr("x", d => { return x(d['survey_question.avg_rating']['rendered']) - 10 } )
        .attr("y", d => { return y(d['survey_question.abs_correlation_coefficient']['rendered']) - 10 } )
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
        .style('align-items', 'center');

// Legend section
var legendCircle = legend.selectAll('foreignObject')
    .data(colorMatcher.color)
    .enter();

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
    .data(newData)
    .enter()
    .append('foreignObject')
    .attr('x', 0 )
    .attr('y', function(d, i) { return i*40 })
    .style('width', '300px')
    .style('height', '25px')
    .append("xhtml:div")
    .style('width', '300px')
    .style('height', '25px')
    .html(function(d, i) { return d['survey_question.subject']['value'] });
