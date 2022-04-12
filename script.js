
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
            .style('position', 'relative')
              .append("svg")
                .style('position', 'fixed')
                .attr('overflow', 'visible')
                .attr("width", '100%' )
                // .attr("height", height + margin.top + margin.bottom)
                .attr("height", '100vh')
                .attr("max-height", '950px')
                // .attr('viewBox', '0 0 816 550')
                .attr('viewBox', '0 0 1110 600');
                
var visual = svg.append("g")
                .attr("transform", "translate(" + 30 + "," + margin.top + ")");

var legend = svg.append("g")
                .attr("transform", "translate(" + 820 + "," + margin.top + ")");

var legendTypo = svg.append("g")
                .attr("transform", "translate(" + 860 + "," + margin.top + ")");

var newData = [
        {
            "questions.subject": {
                "value": "Communication & Managing Expectations",
                "filterable_value": "\"Communication & Managing Expectations\""
            },
            "fact_table.ratings": {
                "value": 804
            },
            "fact_table.priority_score": {
                "value": 1.6753841032626702,
                "rendered": "1.68"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.7277001708129568,
                "rendered": "0.73",
                "html": "1.  Communication &amp; Managing Expectations  0.73 "
            },
            "fact_table.avg_star_rating": {
                "value": 7.6977,
                "rendered": "7.7"
            }
        },
        {
            "questions.subject": {
                "value": "Belongingness"
            },
            "fact_table.ratings": {
                "value": 481
            },
            "fact_table.priority_score": {
                "value": 1.641980524651498,
                "rendered": "1.64"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.7667789878824591,
                "rendered": "0.77",
                "html": "2.  Belongingness  0.77 "
            },
            "fact_table.avg_star_rating": {
                "value": 7.8586,
                "rendered": "7.9"
            }
        },
        {
            "questions.subject": {
                "value": "Interview Preparation"
            },
            "fact_table.ratings": {
                "value": 783
            },
            "fact_table.priority_score": {
                "value": 1.3845934823584911,
                "rendered": "1.38"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.7003153519591782,
                "rendered": "0.70",
                "html": "3.  Interview Preparation  0.70 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.0229,
                "rendered": "8.0"
            }
        },
        {
            "questions.subject": {
                "value": "Team Overview"
            },
            "fact_table.ratings": {
                "value": 789
            },
            "fact_table.priority_score": {
                "value": 1.3425283379255983,
                "rendered": "1.34"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.6927748273520813,
                "rendered": "0.69",
                "html": "4.  Team Overview  0.69 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.0621,
                "rendered": "8.1"
            }
        },
        {
            "questions.subject": {
                "value": "Respectful Hiring"
            },
            "fact_table.ratings": {
                "value": 483
            },
            "fact_table.priority_score": {
                "value": 1.3181688177517794,
                "rendered": "1.32"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.7153464035121178,
                "rendered": "0.72",
                "html": "5.  Respectful Hiring  0.72 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.1573,
                "rendered": "8.2"
            }
        },
        {
            "questions.subject": {
                "value": "Interview"
            },
            "fact_table.ratings": {
                "value": 798
            },
            "fact_table.priority_score": {
                "value": 1.3092572449771571,
                "rendered": "1.31"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.6533871868335948,
                "rendered": "0.65",
                "html": "6.  Interview  0.65 "
            },
            "fact_table.avg_star_rating": {
                "value": 7.9962,
                "rendered": "8.0"
            }
        },
        {
            "questions.subject": {
                "value": "Preparation for Interview(s)"
            },
            "fact_table.ratings": {
                "value": 796
            },
            "fact_table.priority_score": {
                "value": 1.306116825093133,
                "rendered": "1.31"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.6362611190048387,
                "rendered": "0.64",
                "html": "7.  Preparation for Interview(s)  0.64 "
            },
            "fact_table.avg_star_rating": {
                "value": 7.9472,
                "rendered": "7.9"
            }
        },
        {
            "questions.subject": {
                "value": "Interview Atmosphere"
            },
            "fact_table.ratings": {
                "value": 784
            },
            "fact_table.priority_score": {
                "value": 1.290910266757768,
                "rendered": "1.29"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.6706724162290981,
                "rendered": "0.67",
                "html": "8.  Interview Atmosphere  0.67 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.0752,
                "rendered": "8.1"
            }
        },
        {
            "questions.subject": {
                "value": "Engagement"
            },
            "fact_table.ratings": {
                "value": 787
            },
            "fact_table.priority_score": {
                "value": 1.280152057749692,
                "rendered": "1.28"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.684426891440169,
                "rendered": "0.68",
                "html": "9.  Engagement  0.68 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.1296,
                "rendered": "8.1"
            }
        },
        {
            "questions.subject": {
                "value": "Responsiveness"
            },
            "fact_table.ratings": {
                "value": 793
            },
            "fact_table.priority_score": {
                "value": 1.2638603116429,
                "rendered": "1.26"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.6347229367431196,
                "rendered": "0.63",
                "html": "10.  Responsiveness  0.63 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.0088,
                "rendered": "8.0"
            }
        },
        {
            "questions.subject": {
                "value": "Scheduling of Interview(s)"
            },
            "fact_table.ratings": {
                "value": 802
            },
            "fact_table.priority_score": {
                "value": 1.1230153905564209,
                "rendered": "1.12"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.576230381526205,
                "rendered": "0.58",
                "html": "11.  Scheduling of Interview(s)  0.58 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.0511,
                "rendered": "8.1"
            }
        },
        {
            "questions.subject": {
                "value": "Preparation Materials"
            },
            "fact_table.ratings": {
                "value": 798
            },
            "fact_table.priority_score": {
                "value": 1.059649736676234,
                "rendered": "1.06"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.6001301108207703,
                "rendered": "0.60",
                "html": "12.  Preparation Materials  0.60 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.2343,
                "rendered": "8.2"
            }
        },
        {
            "questions.subject": {
                "value": "Asking Questions"
            },
            "fact_table.ratings": {
                "value": 790
            },
            "fact_table.priority_score": {
                "value": 1.0521646266877305,
                "rendered": "1.05"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.6458167362433898,
                "rendered": "0.65",
                "html": "13.  Asking Questions  0.65 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.3708,
                "rendered": "8.4"
            }
        },
        {
            "questions.subject": {
                "value": "Job Description"
            },
            "fact_table.ratings": {
                "value": 792
            },
            "fact_table.priority_score": {
                "value": 0.9279414869433581,
                "rendered": "0.93"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.5226955933889247,
                "rendered": "0.52",
                "html": "14.  Job Description  0.52 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.2247,
                "rendered": "8.2"
            }
        },
        {
            "questions.subject": {
                "value": "Careers Site"
            },
            "fact_table.ratings": {
                "value": 767
            },
            "fact_table.priority_score": {
                "value": 0.5692001932824088,
                "rendered": "0.57"
            },
            "fact_table.abs_correlation_coefficient": {
                "value": 0.44639651265187735,
                "rendered": "0.45",
                "html": "15.  Careers Site  0.45 "
            },
            "fact_table.avg_star_rating": {
                "value": 8.7249,
                "rendered": "8.7"
            }
        }
    ];

var newData2 = [
    {
        "questions.subject": {
            "value": "Proficiency interviewer"
        },
        "fact_table.ratings": {
            "value": 1391,
            "rendered": "1,391"
        },
        "fact_table.priority_score": {
            "value": 1.7732079665480414,
            "rendered": "1.77"
        },
        "fact_table.abs_correlation_coefficient": {
            "value": 0.6042417932760994,
            "rendered": "0.60",
            "html": "2.  Proficiency interviewer  0.60 "
        },
        "fact_table.avg_star_rating": {
            "value": 7.0654,
            "rendered": "7.1"
        }
    },
    {
        "questions.subject": {
            "value": "Proficiency recruiter"
        },
        "fact_table.ratings": {
            "value": 1391,
            "rendered": "1,391"
        },
        "fact_table.priority_score": {
            "value": 1.4367482708046782,
            "rendered": "1.44"
        },
        "fact_table.abs_correlation_coefficient": {
            "value": 0.5228912438783995,
            "rendered": "0.52",
            "html": "3.  Proficiency recruiter  0.52 "
        },
        "fact_table.avg_star_rating": {
            "value": 7.2523,
            "rendered": "7.3"
        }
    },
    {
        "questions.subject": {
            "value": "Preparation of interview(s)"
        },
        "fact_table.ratings": {
            "value": 1300,
            "rendered": "1,300"
        },
        "fact_table.priority_score": {
            "value": 2.150165939407698,
            "rendered": "2.15"
        },
        "fact_table.abs_correlation_coefficient": {
            "value": 0.49887840821524326,
            "rendered": "0.50",
            "html": "1.  Preparation of interview(s)  0.50 "
        },
        "fact_table.avg_star_rating": {
            "value": 5.69,
            "rendered": "5.7"
        }
    },
    {
        "questions.subject": {
            "value": "Quick response"
        },
        "fact_table.ratings": {
            "value": 1157,
            "rendered": "1,157"
        },
        "fact_table.priority_score": {
            "value": 0.6809112094002471,
            "rendered": "0.68"
        },
        "fact_table.abs_correlation_coefficient": {
            "value": 0.20612435956900377,
            "rendered": "0.21",
            "html": "5.  Quick response  0.21 "
        },
        "fact_table.avg_star_rating": {
            "value": 6.6966,
            "rendered": "6.7"
        }
    },
    {
        "questions.subject": {
            "value": "Planning of interview(s)"
        },
        "fact_table.ratings": {
            "value": 1105,
            "rendered": "1,105"
        },
        "fact_table.priority_score": {
            "value": 0.651756010180575,
            "rendered": "0.65"
        },
        "fact_table.abs_correlation_coefficient": {
            "value": 0.20593908309547998,
            "rendered": "0.21",
            "html": "6.  Planning of interview(s)  0.21 "
        },
        "fact_table.avg_star_rating": {
            "value": 6.8352,
            "rendered": "6.8"
        }
    },
    {
        "questions.subject": {
            "value": "Quick and easy application form"
        },
        "fact_table.ratings": {
            "value": 1092,
            "rendered": "1,092"
        },
        "fact_table.priority_score": {
            "value": 0.27247231005652367,
            "rendered": "0.27"
        },
        "fact_table.abs_correlation_coefficient": {
            "value": 0.10403280136555446,
            "rendered": "0.10",
            "html": "8.  Quick and easy application form  0.10 "
        },
        "fact_table.avg_star_rating": {
            "value": 7.3809,
            "rendered": "7.4"
        }
    },
    {
        "questions.subject": {
            "value": "Speed of the process"
        },
        "fact_table.ratings": {
            "value": 1066,
            "rendered": "1,066"
        },
        "fact_table.priority_score": {
            "value": 0.8241801340864509,
            "rendered": "0.82"
        },
        "fact_table.abs_correlation_coefficient": {
            "value": 0.23304307359793328,
            "rendered": "0.23",
            "html": "4.  Speed of the process  0.23 "
        },
        "fact_table.avg_star_rating": {
            "value": 6.4634,
            "rendered": "6.5"
        }
    },
    {
        "questions.subject": {
            "value": "Easy to find job online"
        },
        "fact_table.ratings": {
            "value": 832
        },
        "fact_table.priority_score": {
            "value": -0.3109732216168035,
            "rendered": "-0.31"
        },
        "fact_table.abs_correlation_coefficient": {
            "value": 0.1391752692520603,
            "rendered": "0.14",
            "html": "9.  Easy to find job online  0.14 "
        },
        "fact_table.avg_star_rating": {
            "value": 7.7656,
            "rendered": "7.8"
        }
    },
    {
        "questions.subject": {
            "value": "Useful job advertisement"
        },
        "fact_table.ratings": {
            "value": 767
        },
        "fact_table.priority_score": {
            "value": -0.5504177362076829,
            "rendered": "-0.55"
        },
        "fact_table.abs_correlation_coefficient": {
            "value": 0.20816827510596533,
            "rendered": "0.21",
            "html": "10.  Useful job advertisement  0.21 "
        },
        "fact_table.avg_star_rating": {
            "value": 7.3559,
            "rendered": "7.4"
        }
    },
    {
        "questions.subject": {
            "value": "Amount of communication"
        },
        "fact_table.ratings": {
            "value": 559
        },
        "fact_table.priority_score": {
            "value": 0.5700191850770815,
            "rendered": "0.57"
        },
        "fact_table.abs_correlation_coefficient": {
            "value": 0.19000639502569383,
            "rendered": "0.19",
            "html": "7.  Amount of communication  0.19 "
        },
        "fact_table.avg_star_rating": {
            "value": 7,
            "rendered": "7.0",
            "filterable_value": "7.0"
        }
    },
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
        "color": "#f29696", // red
        "text": "Improve",
        "alignment": "left"
    }, {
        "class": "topRight",
        "transform": 'translate(385px, 0px)',
        "color": "#bddaa5", // green
        "text": "Leverage",
        "alignment": "end"
    }, {
        "class": "bottomLeft",
        "transform": 'translate(0px, 260px)',
        "color": "#f7e39c", // yellow
        "text": "Monitor",
        "alignment": "left"
    }, {
        "class": "bottomRight",
        "transform": 'translate(385px, 260px)',
        "color": "#d5e8ff", // blue
        "text": "Maintain",
        "alignment": "end"
    },
];

const minX = d3.min(newData2, d => d['fact_table.avg_star_rating']['rendered'])
const maxX = d3.max(newData2, d => d['fact_table.avg_star_rating']['rendered'])

//   Add X axis
var x = d3.scaleLinear()
    .domain([ minX, maxX ])
    .range([ 0, width ]).nice();

var xAxis = d3.axisBottom(x)

visual.append("g")
    .attr("transform", "translate(0," + (height+2) + ")")
    .call(xAxis)
    .call(g => g.select(".domain").remove());

// Add Y axis
var y = d3.scaleLinear()
    .domain([0, 1])
    .range([height, 0]);

visual.append("g")
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove());

var arryOfAvg = xAxis.scale().ticks()

console.log(arryOfAvg)

var midItem = ( (arryOfAvg[arryOfAvg.length -1] - arryOfAvg[0]) / 2 ) + arryOfAvg[0]

console.log( midItem )

var colorMatcher = {
    color: newData2.map((d)=> {
        if(d['fact_table.abs_correlation_coefficient']['rendered'] >= 0.5 && d['fact_table.avg_star_rating']['value'] <= midItem) {
            return "#f29696" // red
        }
        if(d['fact_table.abs_correlation_coefficient']['rendered'] <= 0.5 && d['fact_table.avg_star_rating']['value'] <= midItem) {
            return "#f7e39c" // yellow
        }
        if (d['fact_table.abs_correlation_coefficient']['rendered'] >= 0.5 && d['fact_table.avg_star_rating']['value'] >= midItem) {
            return "#bddaa5" // green
        }
        if (d['fact_table.abs_correlation_coefficient']['rendered'] <= 0.5 && d['fact_table.avg_star_rating']['value'] >= midItem) {
            return "#d5e8ff" // blue
        }
    })
};

//colored boxes with text inside
visual.append('g')
    .selectAll("foreignObject")
    .data(divGroup)
    .enter()
    .append("foreignObject")
        .attr('width', (width / 2) - 5 + 'px')
        .attr('height', '250px')
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
    .style("text-align", function (d) {return d.alignment})
    .style("padding", "5px")
    .html(d => d.text);

//Tooltips
var tooltip = d3.select("#chart")
    .data(newData2.slice(0, 25))
    .append("foreignObject")
    .style("visibility", "hidden")
    .style("font-size", '12px')
    .style("background-color", 'rgba(34, 42, 60, 0.9)')
    .style('color', '#ffffff')
    .style('border-radius', '5px')
    .style('padding', '10px')
    .style('position', 'absolute')
    .style('z-index', '3')
    .style('width', '160px')
    .attr('width', '160px');

var mouseover = function(d) {
    tooltip.style("visibility", "visible")
}

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
var elemEnter = visual.append('g').selectAll('g myCircleText')
    .data(newData2.slice(0, 25))
    .enter()
	.append("g")
    .style('cursor', 'default')
	.attr("transform", function(d){return "translate("+ (x(d['fact_table.avg_star_rating']['rendered'])) +","+ (y(d['fact_table.abs_correlation_coefficient']['rendered'])) +")"})
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave);
    /*Create the circle for each block */
    var circle = elemEnter.append("circle")
	    .attr("r", 12 )
	    .attr("fill", "white")
	    .attr("stroke", "rgb(51, 51, 51)")
        .attr("stroke-width", 1)
        .style('cursor', 'default')
        .style('border-radius', '100%')
        .style('border', '1px solid rgb(51, 51, 51)')
        .style("filter", "url(#drop-shadow)")
 
    /* Create the text for each block */
    elemEnter.append("text")
	    .attr("dx", function(d, i){return i >= 9 ? -7 : -4})
	    .attr("dy", function(d){return 5})
        .style("font-size", "12px")
	    .text(function(d, i){return i + 1})

// Legend section
var legendCircle = legend.selectAll('foreignObject')
    .data(colorMatcher.color.slice(0, 10))
    .enter();

legendCircle.append('foreignObject')
    .attr('x', 0 )
    .attr('y', function(d, i) { return i*40; })
    .style('background-color', function(d, i) {return d})
    .attr('width', '25px')
    .attr('height', '25px')
    .style('border-radius', '100%')
    .append("xhtml:div")
    .style('border-radius', '100%')
    .style('width', '25px')
    .style('height', '25px')
    .style('display', 'flex')
    .style('justify-content', 'center')
    .style('align-items', 'center')
    .style('background-color', function(d, i) {return d})
    .html(function(d, i) { return i + 1 });

legendTypo.selectAll('foreignObject')
    .data(newData2.slice(0, 10))
    .enter()
    .append('foreignObject')
    .attr('x', 0 )
    .attr('y', function(d, i) { return i*40 })
    .attr('width', '300px')
    .attr('height', '25px')
    .append("xhtml:div")
    .style('width', '300px')
    .style('height', '25px')
    .html(function(d, i) { return d['questions.subject']['value'] });

// filters section, shadow circle
var defs = svg.append("defs");

var filter = defs.append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "130%");

filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 1.8)
    .attr("result", "blur");

filter.append("feOffset")
    .attr("in", "blur")
    .attr("dx", 1)
    .attr("dy", 2)
    .attr("result", "offsetBlur");

var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
    .attr("in", "offsetBlur")
feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");
