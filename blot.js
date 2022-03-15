const visObject = {
  updateAsync: function (
    data,
    element,
    config,
    queryResponse,
    details,
    doneRendering
  ) {
    console.log(data);
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 1013 - margin.left - margin.right,
      height = 431 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select("#vis")
      .append("div")
      .attr("id", "chart")
      .style("display", "inline-block")
      .style("margin-right", "40px")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var divGroup = [
      {
        class: "topLeft",
        transform: "translate(0px, 0px)",
        color: "#f29696", //red
        text: "Improve",
      },
      {
        class: "topRight",
        transform: "translate(478px, 0px)",
        color: "#bddaa5", //green
        text: "Leverage",
      },
      {
        class: "bottomLeft",
        transform: "translate(0px, 196px)",
        color: "#f7e39c", //yellow
        text: "Monitor",
      },
      {
        class: "bottomRight",
        transform: "translate(478px, 196px)",
        color: "#d5e8ff", //blue
        text: "Maintain",
      },
    ];

    var colorMatcher = [
      {
          "color": data.map((d)=> {
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
      }
   ];

    const minX = d3.min(data, (d) => d["survey_question.avg_rating"]["value"]);
    const maxX = d3.max(data, (d) => d["survey_question.avg_rating"]["value"]);

    const minY = d3.min(
      data,
      (d) => d["survey_question.abs_correlation_coefficient"]["value"]
    );
    const maxY = d3.max(
      data,
      (d) => d["survey_question.abs_correlation_coefficient"]["value"]
    );

    //   Add X axis
    var x = d3.scaleLinear().domain([minX, maxX]).range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear().domain([0, 1]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    //colored boxes with text inside
    svg
      .append("g")
      .selectAll("foreignObject")
      .data(divGroup)
      .enter()
      .append("foreignObject")
      .attr("class", function (d) {
        return d.class;
      })
      .style("background-color", function (d) {
        return d.color;
      })
      .style("width", "50%")
      .style("height", "196.25px")
      .style("transform", function (d) {
        return d.transform;
      })
      .append("xhtml:body")
      .html((d) => d.text);

    var tooltip = d3
      .select("#chart")
      .data(data)
      .append("div")
      .style("visibility", "hidden")
      .style("style", "fit-content")
      .style("background-color", "white")
      .style("border", "1px solid")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("position", "absolute")
      .style("z-index", "3")
      .style(
        "top",
        (d) => d["survey_question.abs_correlation_coefficient"]["value"]
      )
      .style("bottom", (d) => d["survey_question.avg_rating"]["value"]);

    var mouseover = function (d) {
      tooltip.style("visibility", "visible");
    };

    var mousemove = function (d) {
      tooltip
        .html(
          d['survey_question.subject']['value'] +
            "<br><br>Ratings: " +
            d["survey_question.ratings"]["value"] +
            "<br>Priority Score: " +
            d["survey_question.priority_score"]["value"] +
            "<br><br> ABS Correlation Coefficient (NPS) is: " +
            d["survey_question.abs_correlation_coefficient"]["value"] +
            "<br> Average Rating is: " +
            d["survey_question.avg_rating"]["value"]
        )
        .style("left", d3.mouse(this)[0] + 90 + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style("top", d3.mouse(this)[1] + "px");
    };

    var mouseleave = function (d) {
      tooltip.transition().duration(100).style("visibility", "hidden");
    };

    // Circles with text inside
    svg
      .append("g")
      .selectAll("foreignObject")
      .data(data) // the .filter part is just to keep a few dots on the chart, not all of them
      .enter()
      .append("foreignObject")
      .attr("x", (d) => {
        return x(d["survey_question.avg_rating"]["value"]);
      })
      .attr("y", (d) => {
        return y(d["survey_question.abs_correlation_coefficient"]["value"]);
      })
      // .attr('class', 'blot')
      .style("border-radius", "100%")
      .style("background-color", "rgb(255, 255, 255)")
      .style("border", "1px solid rgb(51, 51, 51)")
      .style("width", "25px")
      .style("height", "25px")
      .style("cursor", "default")

      // hover
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      // add text inside the circle
      .append("xhtml:body")
      .html((d, i) => i + 1)
      .style("margin", "auto")
      .style("text-align", "center")
      .style("padding-top", "3px");

    // Ranking column
    var rankingId = d3
      .select("#vis")
      .style("display", "flex")
      .append("div")
      .attr("id", "ranking")
      .style("position", "relative")
      .style("display", "inline-blck");

    var circlesContainer = rankingId
      .append("div")
      .style("position", "absolute")
      .style("left", "-9px")
      .style("top", "10px");

    colorMatcher[0].color.map((color, i) => {
      circlesContainer
        .append("div")
        // .attr("class", "circle")
        .style("width", "25px")
        .style("height", "25px")
        .style("border", "1px solid #333")
        .style("border-radius", "100%")
        .style("margin-bottom", "13px")
        .style("text-align", "center")
        .style("display", "flex")
        .style("align-items", "center")
        .style("justify-content", "center")
        .style("background-color", color)
        .html(i + 1);
    });

    var textContainer = rankingId
      .append("div")
      //   .attr('class', 'text-container');
      .style("margin-left", "30px")
      .style("margin-top", "15px");

    newData.map((data, i) => {
      textContainer
        .append("p")
        // .attr('class', 'text')
        .style("margin-top", "0px")
        .style("margin-bottom", "27px")
        .style("line-height", "13.5px")
        .text(data["survey_question.subject"]["html"]);
    });
    doneRendering();
  },
};

looker.plugins.visualizations.add(visObject);
