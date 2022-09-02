const visObject = {
  create: function (element, config) {
    this.svg = d3.select("#vis")
    .style("font-family", "Open Sans, sans-serif")
    .style("color", "rgb(105, 105, 105)")
    .append("div")
    .attr("id", "chart")
    .style("display", "inline-block")
    .style("position", "relative")
    .append("svg")
    .style("position", "fixed")
    .attr("overflow", "visible")
    .attr("width", "100%")
    .attr("height", "100vh")
    .attr("max-height", "950px")
    .attr("viewBox", "0 0 1100 600");
  },

  update: function (data, element, config, queryResponse, details, doneRendering) {
    element.innerHTML = "";
    
    const questionSubject = queryResponse?.fields?.dimensions[0].name; //questions.subject
    const questionQuestion = queryResponse?.fields?.dimension_like[1].name; //questions.question
    const ratings = queryResponse?.fields?.measures[0].name; //fact_table.ratings
    // const priorityScore = queryResponse.fields.measures[1].name; //fact_table.priority_score
    const absCorrelation = queryResponse?.fields?.measures[2].name; //fact_table.abs_correlation_coefficient
    const averageRating = queryResponse?.fields?.measures[3].name; //fact_table.avg_star_rating
    // const totalResponse = queryResponse?.totals_data[ratings] !== null ? queryResponse.totals_data[ratings].value : null; //total_response
    const totalAvgStarRating = queryResponse?.totals_data?.[averageRating]?.html; //total_data_avg_star_rating

    function visual() {
      var meas = queryResponse?.["fields"]?.["measure_like"];
      var mesID = meas[3] ? meas[3]["name"] : null;
      var mesData = data ? data[0][mesID] : null;
      var mesLink = mesData ? mesData.links : null;
  
      // set the dimensions and margins of the graph
      var margin = { top: 10, right: 30, bottom: 30, left: 60 },
        width = 850 - margin.left - margin.right,
        height = 550 - margin.top - margin.bottom;
      // append the svg object to the body of the page
      var svg = this.svg;
  
      var visual = svg.append("g").attr("transform", "translate(" + 30 + "," + margin.top + ")");
  
      var legend = svg.append("g").attr("transform", "translate(" + 820 + "," + margin.top + ")");
  
      var legendTypo = svg.append("g").attr("transform", "translate(" + 860 + "," + margin.top + ")");
  
      const minX = d3.min(data, (d) => d[averageRating]["rendered"]);
      const maxX = d3.max(data, (d) => d[averageRating]["rendered"]);

      //   Add X axis
      var x = d3.scaleLinear().domain([minX, maxX]).range([0, width]).nice();
  
      var xAxis = d3.axisBottom(x);
  
      visual.append("g").attr("transform", "translate(0," + (height + 2) + ")").call(xAxis).call((g) => g.select(".domain").remove());
  
      // Add Y axis
      var y = d3.scaleLinear().domain([0, 1]).range([height, 0]);
      visual.append("g").call(d3.axisLeft(y)).call((g) => g.select(".domain").remove());
  
      var arryOfAvg = xAxis.scale().ticks();
  
      // var midItem = (arryOfAvg[arryOfAvg.length - 1] - arryOfAvg[0]) / 2 + arryOfAvg[0];

      var colors = []
      function colorMatcher() {
        data.forEach(d => {
          if(d[absCorrelation]['rendered'] >= 0.5 && d[averageRating]['rendered'] <= totalAvgStarRating) {
            return colors.push("#f29696") // red
          }
          if(d[absCorrelation]['rendered'] <= 0.5 && d[averageRating]['rendered'] <= totalAvgStarRating) {
              return colors.push("#f7e39c") // yellow
          }
          if (d[absCorrelation]['rendered'] >= 0.5 && d[averageRating]['rendered'] >= totalAvgStarRating) {
              return colors.push("#bddaa5") // green
          }
          if (d[absCorrelation]['rendered'] <= 0.5 && d[averageRating]['rendered'] >= totalAvgStarRating) {
              return colors.push("#d5e8ff") // blue
          }
        })
        return colors
      }
      const colorMatchs = colorMatcher();

      var seqWidth = []
      function widthCalc() {
        const containerWidth = width
        const leftWidthCont = (totalAvgStarRating - arryOfAvg[0]) / (arryOfAvg[arryOfAvg.length -1] - arryOfAvg[0]) * containerWidth
        arryOfAvg.forEach(element => {
          if (parseInt(totalAvgStarRating) === element) {
            seqWidth = {
              leftWidth: leftWidthCont,
              rightWidth: containerWidth - leftWidthCont
            }
          } 
        })
        return seqWidth
      }
      const widthCalculator = widthCalc();

      var divGroup = [
        {
          class: "topLeft",
          transform: "translate(0px, 0px)",
          color: "#f29696", // red
          text: "Improve",
          alignment: "left",
          width: widthCalculator.leftWidth
        },
        {
          class: "topRight",
          transform: "translate("+ (widthCalculator.leftWidth + 10 + 'px') +", 0px)",
          color: "#bddaa5", // green
          text: "Leverage",
          alignment: "end",
          width: widthCalculator.rightWidth - 10
        },
        {
          class: "bottomLeft",
          transform: "translate(0px, 261px)",
          color: "#f7e39c", // yellow
          text: "Monitor",
          alignment: "left",
          width: widthCalculator.leftWidth
        },
        {
          class: "bottomRight",
          transform: "translate("+ (widthCalculator.leftWidth + 10 + 'px') +", 261px)",
          color: "#d5e8ff", // blue
          text: "Maintain",
          alignment: "end",
          width: widthCalculator.rightWidth - 10
        },
      ];

      //colored boxes with text inside
      visual.append("g")
        .selectAll("foreignObject")
        .data(divGroup)
        .enter()
        .append("foreignObject")
          .attr("width", function (d) { return d.width + 'px' })
          .attr("height", "250px")
          .attr("class", function (d) { return d.class; })
          .attr("fill", function (d) { return d.color; })
          .style("background-color", function (d) { return d.color; })
          .style("height", "250px")
          .style("padding", "5px")
          .style("border-radius", "10px")
          .style("transform", function (d) { return d.transform; })
        .append("xhtml:div")
          .style("background-color", function (d) { return d.color; })
          .style("height", "100%")
          .style("padding", "5px")
          .style("text-align", function (d) { return d.alignment; })
          .on('click', function() {
            tooltip.style("visibility", "hidden");
          })
          .html((d) => d.text);

      var tooltip = d3
        .select("#chart")
        .data(data.slice(0, 25))
        .append("foreignObject")
        .style("visibility", "hidden")
        .style("font-size", "12px")
        .style("background-color", "rgba(34, 42, 60, 0.9)")
        .style("color", "#ffffff")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("position", "absolute")
        .style("z-index", "3")
        .style("width", "180px");
  
      // Circles with text inside
      var elemEnter = visual
        .append("g")
        .selectAll("g myCircleText")
        .data(data.slice(0, 25))
        .enter()
        .append("g")
        .style("cursor", "default")
        .attr("transform", function (d) { return ("translate(" + x(d[averageRating]["rendered"]) + "," + y(d[absCorrelation]["rendered"]) +")"); });
  
      elemEnter.on("click", function(d) {
        const subjectElement = questionSubject ? `<strong style="font-size: 13px; line-height: 18px">${d[questionSubject]["value"]}</strong><br>` : ''
        const questionElement = questionQuestion ? `<strong style="font-size: 11px; display: block; margin: 5px 0;">${d[questionQuestion]["value"]} ?</strong>` : ''
        tooltip.style("visibility", "visible")
        tooltip.html(
          subjectElement + 
          questionElement +
            `<span style="line-height: 26px">Ratings: </span>` + 
            `<strong style="font-size: 13px; font-family: Arial, Helvetica, sans-serif;">${d[ratings]["value"]}</strong>` + 
            `<br> <span style="line-height: 26px">Satisfaction: </span>` + 
            `<strong style="font-size: 13px; font-family: Arial, Helvetica, sans-serif">${d[averageRating]["rendered"]}</strong>` +
            `<br> <span style="line-height: 26px">Correlation (NPS): </span>` + 
            `<strong style="font-size: 13px; font-family: Arial, Helvetica, sans-serif;">${d[absCorrelation]["rendered"]}</strong><br><br>` 
        )
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY) + "px")
        
        if (mesLink && mesLink !== null) {
          var cta = tooltip.append('a')
              .style('cursor', 'pointer')
              .html(`<strong 
                  style="
                  width: 140px;
                  background-color: blue; 
                  padding: 5px 10px; 
                  border-radius: 10px;
                  margin: auto;
                  display: block;
                  text-align: center;
                  font-family: Arial, Helvetica, sans-serif;
                  ">Inspect item</strong>`)
              .on("click", function (d, i) {
                LookerCharts.Utils.openDrillMenu({
                    links: mesLink,
                    event: event,
                })
              });
        }
      });
        
      /*Create the circle for each block */
      var circle = elemEnter.append("circle")
      .attr("r", 12)
      .attr("fill", "white")
      .attr("stroke", "rgb(51, 51, 51)")
      .attr("stroke-width", 1)
      .style('cursor', 'pointer')
      .style('filter', 'drop-shadow(2px 2px 2px rgba(9, 9, 9, 0.2))');
  
      /* Create the text for each block */
      elemEnter.append("text")
      .attr("dx", function(d, i){return i >= 9 ? -7 : -4})
      .attr("dy", function(d){return 5})
      .style("font-size", "12px")
      .text(function(d, i){return i + 1});
  
      var legendCircle = legend
        .selectAll("foreignObject")
        .data(colorMatchs.slice(0, 10))
        .enter();
  
      // Legend section
      legendCircle
        .append("foreignObject")
        .attr("x", 0)
        .attr("y", function (d, i) {
          return i * 50;
        })
        .style("background-color", function (d, i) {
          return d;
        })
        .attr("width", "25px")
        .attr("height", "25px")
        .style("border-radius", "100%")
        .append("xhtml:div")
        .style("border-radius", "100%")
        .style("width", "25px")
        .style("height", "25px")
        .style("display", "flex")
        .style("justify-content", "center")
        .style("align-items", "center")
        .style("background-color", function (d, i) {
          return d;
        })
        .html(function (d, i) {
          return i + 1;
        });
  
      legendTypo
        .selectAll("foreignObject")
        .data(data.slice(0, 10))
        .enter()
        .append("foreignObject")
        .attr("x", 0)
        .attr("y", function (d, i) {
          return i * 50;
        })
        .attr("width", "200px")
        .attr("height", "25px")
        .attr('height', '40px')
        .style('line-height', '20px')
        .style('-webkit-box-orient', 'vertical')
        .style('-webkit-line-clamp', '2')
        .style('display', '-webkit-box')
  
        .append("xhtml:div")
        .style("width", "200px")
        .style('height', '40px')
        .style('line-height', '20px')
        .html(function (d, i) {
          return d[questionSubject]["value"];
        });
      
      //Learn more
      svg.append("svg:a")
      .attr("xlink:href", 'https://support.starred.com/docs/starred-matrix-1')
      .attr("target", "_blank")
      .append("svg:text")
      .attr('width', '200px')
      .attr('height', '40px')
      .attr('fill', '#0000EE')
      .attr('font-size', 12)
      .attr("transform", "translate(" + 10 + "," + (height + 60) + ")")
      .html(`Learn more`)

      svg.append("svg:text")
      .attr("fill", 'rgb(105, 105, 105)')
      .attr('font-size', 12)
      .html(`about how to interpret the priority matrix.`)
      .attr("transform", "translate(" + 80 + "," + (height + 60) + ")");
    }

    function message() {
      var svg = d3.select("#vis")
      .style('font-family', 'Open Sans, sans-serif')
      .style('color', 'rgb(105, 105, 105)')
      .append("svg")
      .attr('overflow', 'visible')
      .attr("width", '100%' )
      .attr("height", '100vh')
      .attr("max-height", '950px').attr('viewBox', '0 0 1110 600');

      svg.append("image")
      .attr('xlink:href', 'https://cdn.starred.com/downloads/looker/priority-matrix-screenshot.png')
      .attr("width", "100%")
      .attr("height", "100%");

      svg.append("foreignObject")
      .style("width", "100%")
      .style("height", "100%")
      .style("background", "rgba(255, 255, 255, 0.2)")
      .style("backdrop-filter", "blur(6px)");

      var container = svg.append("foreignObject")
      .style("width", '50%')
      .style("height", "300px")
      .style("border", '1px solid')
      .style("padding-top", "120px")
      .style("transform", "translate(290px, 150px)")
      .style("border-radius", "5px")
      .style("background-color", "white");

      var emoji = svg.append("g")
      
      var main = emoji.append("circle")
      .attr('r', 23)
      .attr('cx', 560)
      .attr('cy', 225)
      .attr('fill', 'white')
      .attr('stroke', 'rgb(226,135,67)')
      .attr("stroke-width", 3);

      var leftEye = emoji.append("circle")
      .attr('r', 3)
      .attr('cx', 550)
      .attr('cy', 220)
      .attr('fill', 'rgb(226,135,67)')
      .attr('stroke', 'rgb(226,135,67)');

      var rightEye = emoji.append("circle")
      .attr('r', 3)
      .attr('cx', 570)
      .attr('cy', 220)
      .attr('fill', 'rgb(226,135,67)')
      .attr('stroke', 'rgb(226,135,67)');

      var mouth = emoji.append("path")
      .attr('transform', 'translate(555, 240)')
      .attr('stroke', 'rgb(226,135,67)')
      .attr('fill', 'rgb(226,135,67)')
      .attr('d', d3.arc()({     
          innerRadius: 7,
          outerRadius: 5, 
          startAngle: Math.PI * 2.5, 
          endAngle: Math.PI * 3/2
      }));

      container.append("xhtml:div")
      .style("display", 'flex')
      .style("justify-content", "center")
      .style("align-items", "center")
      .style("flex-direction", "column")
      .html(`
          <strong style="font-size: 32px; text-align: center; line-height: 64px;">
              Priority matrix not available
          </strong>
          <span>You received few responses to provide a priority matrix.</span>
          <span style="line-height: 46px">Please invite more candidates.</span>
      `);
    }
    const totlaRatingResponses = data && data.reduce((acc, d) => acc + d[ratings].value, 0)

    if (data && totlaRatingResponses !== null && totlaRatingResponses > 19) {
      visual();
    } else {
      message();
    }

    doneRendering();
  }
}

looker.plugins.visualizations.add(visObject);
