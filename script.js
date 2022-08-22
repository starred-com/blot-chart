function visual() {
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

  var dataJson = [
    {
      "questions.subject": {
        value: "Preparation of interview(s)",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q2",
      },
      "fact_table.ratings": {
        value: 109,
      },
      "fact_table.priority_score": {
        value: 2.339506578145407,
        rendered: "2.34",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.7369917395871368,
        rendered: "0.74",
        html: "1.  Preparation of interview(s)  0.74 ",
      },
      "fact_table.avg_star_rating": {
        value: 6.8256,
        rendered: "6.83",
        html: "6.8 ",
      },
    },
    {
      "questions.subject": {
        value: "Proficiency interviewer",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q2",
      },
      "fact_table.ratings": {
        value: 105,
      },
      "fact_table.priority_score": {
        value: 1.6824157393369028,
        rendered: "1.68",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.7269652764710293,
        rendered: "0.73",
        html: "7.  Proficiency interviewer  0.73 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.6857,
        rendered: "7.69",
        html: "7.7 ",
      },
    },
    {
      "questions.subject": {
        value: "Proficiency recruiter",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q2",
      },
      "fact_table.ratings": {
        value: 105,
      },
      "fact_table.priority_score": {
        value: 1.8604767847133983,
        rendered: "1.86",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.7371436208698436,
        rendered: "0.74",
        html: "4.  Proficiency recruiter  0.74 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.4761,
        rendered: "7.48",
        html: "7.5 ",
      },
    },
    {
      "questions.subject": {
        value: "Quick response",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q2",
      },
      "fact_table.ratings": {
        value: 104,
      },
      "fact_table.priority_score": {
        value: 0.613142831810023,
        rendered: "0.61",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.30805005617464987,
        rendered: "0.31",
        html: "27.  Quick response  0.31 ",
      },
      "fact_table.avg_star_rating": {
        value: 8.0096,
        rendered: "8.01",
        html: "8.0 ",
      },
    },
    {
      "questions.subject": {
        value: "Easy to find job online",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q2",
      },
      "fact_table.ratings": {
        value: 98,
      },
      "fact_table.priority_score": {
        value: 0.28290230542094635,
        rendered: "0.28",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.298105695912483,
        rendered: "0.30",
        html: "35.  Easy to find job online  0.30 ",
      },
      "fact_table.avg_star_rating": {
        value: 9.051,
        rendered: "9.05",
        html: "9.1 ",
      },
    },
    {
      "questions.subject": {
        value: "Quick and easy application form",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q2",
      },
      "fact_table.ratings": {
        value: 93,
      },
      "fact_table.priority_score": {
        value: 0.1443440309784715,
        rendered: "0.14",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.08337802159107642,
        rendered: "0.08",
        html: "39.  Quick and easy application form  0.08 ",
      },
      "fact_table.avg_star_rating": {
        value: 8.2688,
        rendered: "8.27",
        html: "8.3 ",
      },
    },
    {
      "questions.subject": {
        value: "Speed of the process",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q2",
      },
      "fact_table.ratings": {
        value: 93,
      },
      "fact_table.priority_score": {
        value: 1.213541756145845,
        rendered: "1.21",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.4993588001587708,
        rendered: "0.50",
        html: "17.  Speed of the process  0.50 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.5698,
        rendered: "7.57",
        html: "7.6 ",
      },
    },
    {
      "questions.subject": {
        value: "Planning of interview(s)",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q2",
      },
      "fact_table.ratings": {
        value: 92,
      },
      "fact_table.priority_score": {
        value: 1.643920037214407,
        rendered: "1.64",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.5794571861876654,
        rendered: "0.58",
        html: "9.  Planning of interview(s)  0.58 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.163,
        rendered: "7.16",
        html: "7.2 ",
      },
    },
    {
      "questions.subject": {
        value: "Useful job advertisement",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q2",
      },
      "fact_table.ratings": {
        value: 80,
      },
      "fact_table.priority_score": {
        value: 0.137334331266348,
        rendered: "0.14",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.0998795136482531,
        rendered: "0.10",
        html: "40.  Useful job advertisement  0.10 ",
      },
      "fact_table.avg_star_rating": {
        value: 8.625,
        rendered: "8.63",
        html: "8.6 ",
      },
    },
    {
      "questions.subject": {
        value: "Amount of communication",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q2",
      },
      "fact_table.ratings": {
        value: 77,
      },
      "fact_table.priority_score": {
        value: 1.857697373095842,
        rendered: "1.86",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.6684047685013643,
        rendered: "0.67",
        html: "5.  Amount of communication  0.67 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.2207,
        rendered: "7.22",
        html: "7.2 ",
      },
    },
    {
      "questions.subject": {
        value: "Proficiency interviewer",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q1",
      },
      "fact_table.ratings": {
        value: 39,
      },
      "fact_table.priority_score": {
        value: 1.577298251009654,
        rendered: "1.58",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.6090424940187096,
        rendered: "0.61",
        html: "11.  Proficiency interviewer  0.61 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.4102,
        rendered: "7.41",
        html: "7.4 ",
      },
    },
    {
      "questions.subject": {
        value: "Proficiency recruiter",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q1",
      },
      "fact_table.ratings": {
        value: 39,
      },
      "fact_table.priority_score": {
        value: 1.142935219141584,
        rendered: "1.14",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.47927840782554787,
        rendered: "0.48",
        html: "18.  Proficiency recruiter  0.48 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.6153,
        rendered: "7.62",
        html: "7.6 ",
      },
    },
    {
      "questions.subject": {
        value: "Quick response",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q1",
      },
      "fact_table.ratings": {
        value: 35,
      },
      "fact_table.priority_score": {
        value: 0.9315005544084278,
        rendered: "0.93",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.267227194448456,
        rendered: "0.27",
        html: "22.  Quick response  0.27 ",
      },
      "fact_table.avg_star_rating": {
        value: 6.5142,
        rendered: "6.51",
        html: "6.5 ",
      },
    },
    {
      "questions.subject": {
        value: "Quick and easy application form",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q1",
      },
      "fact_table.ratings": {
        value: 33,
      },
      "fact_table.priority_score": {
        value: 0.5046776154909192,
        rendered: "0.50",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.22205104518255858,
        rendered: "0.22",
        html: "31.  Quick and easy application form  0.22 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.7272,
        rendered: "7.73",
        html: "7.7 ",
      },
    },
    {
      "questions.subject": {
        value: "Planning of interview(s)",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q1",
      },
      "fact_table.ratings": {
        value: 32,
      },
      "fact_table.priority_score": {
        value: 1.2483978999649317,
        rendered: "1.25",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.4161326333216439,
        rendered: "0.42",
        html: "16.  Planning of interview(s)  0.42 ",
      },
      "fact_table.avg_star_rating": {
        value: 7,
        rendered: "7.00",
        filterable_value: "7.0",
        html: "7.0 ",
      },
    },
    {
      "questions.subject": {
        value: "Preparation of interview(s)",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q1",
      },
      "fact_table.ratings": {
        value: 31,
      },
      "fact_table.priority_score": {
        value: 1.050132169394292,
        rendered: "1.05",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.29594526248289144,
        rendered: "0.30",
        html: "19.  Preparation of interview(s)  0.30 ",
      },
      "fact_table.avg_star_rating": {
        value: 6.4516,
        rendered: "6.45",
        html: "6.5 ",
      },
    },
    {
      "questions.subject": {
        value: "Preparation of interview(s)",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q3",
      },
      "fact_table.ratings": {
        value: 28,
      },
      "fact_table.priority_score": {
        value: 1.9278041899180234,
        rendered: "1.93",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.8433827062376513,
        rendered: "0.84",
        html: "3.  Preparation of interview(s)  0.84 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.7142,
        rendered: "7.71",
        html: "7.7 ",
      },
    },
    {
      "questions.subject": {
        value: "Speed of the process",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q1",
      },
      "fact_table.ratings": {
        value: 28,
      },
      "fact_table.priority_score": {
        value: 0.28802788200974055,
        rendered: "0.29",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.08765837300192968,
        rendered: "0.09",
        html: "34.  Speed of the process  0.09 ",
      },
      "fact_table.avg_star_rating": {
        value: 6.7142,
        rendered: "6.71",
        html: "6.7 ",
      },
    },
    {
      "questions.subject": {
        value: "Quick and easy application form",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q4",
      },
      "fact_table.ratings": {
        value: 28,
      },
      "fact_table.priority_score": {
        value: 0.36550291025063514,
        rendered: "0.37",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.1599015269273931,
        rendered: "0.16",
        html: "32.  Quick and easy application form  0.16 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.7142,
        rendered: "7.71",
        html: "7.7 ",
      },
    },
    {
      "questions.subject": {
        value: "Easy to find job online",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q1",
      },
      "fact_table.ratings": {
        value: 27,
      },
      "fact_table.priority_score": {
        value: 0.545673280936959,
        rendered: "0.55",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.19909270320233471,
        rendered: "0.20",
        html: "29.  Easy to find job online  0.20 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.2592,
        rendered: "7.26",
        html: "7.3 ",
      },
    },
    {
      "questions.subject": {
        value: "Preparation of interview(s)",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q4",
      },
      "fact_table.ratings": {
        value: 27,
      },
      "fact_table.priority_score": {
        value: 0.9620744458218445,
        rendered: "0.96",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.17551298838307847,
        rendered: "0.18",
        html: "21.  Preparation of interview(s)  0.18 ",
      },
      "fact_table.avg_star_rating": {
        value: 4.5185,
        rendered: "4.52",
        html: "4.5 ",
      },
    },
    {
      "questions.subject": {
        value: "Quick response",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q4",
      },
      "fact_table.ratings": {
        value: 26,
      },
      "fact_table.priority_score": {
        value: 0.6042190356527085,
        rendered: "0.60",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.17263401018648813,
        rendered: "0.17",
        html: "28.  Quick response  0.17 ",
      },
      "fact_table.avg_star_rating": {
        value: 6.5,
        rendered: "6.50",
        html: "6.5 ",
      },
    },
    {
      "questions.subject": {
        value: "Speed of the process",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q4",
      },
      "fact_table.ratings": {
        value: 26,
      },
      "fact_table.priority_score": {
        value: 0.803349445279761,
        rendered: "0.80",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.22703107115437643,
        rendered: "0.23",
        html: "24.  Speed of the process  0.23 ",
      },
      "fact_table.avg_star_rating": {
        value: 6.4615,
        rendered: "6.46",
        html: "6.5 ",
      },
    },
    {
      "questions.subject": {
        value: "Useful job advertisement",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q1",
      },
      "fact_table.ratings": {
        value: 26,
      },
      "fact_table.priority_score": {
        value: 0.2182696895630358,
        rendered: "0.22",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.08106881947817404,
        rendered: "0.08",
        html: "37.  Useful job advertisement  0.08 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.3076,
        rendered: "7.31",
        html: "7.3 ",
      },
    },
    {
      "questions.subject": {
        value: "Planning of interview(s)",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q4",
      },
      "fact_table.ratings": {
        value: 24,
      },
      "fact_table.priority_score": {
        value: 0.7101377480506776,
        rendered: "0.71",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.24347301678289765,
        rendered: "0.24",
        html: "26.  Planning of interview(s)  0.24 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.0833,
        rendered: "7.08",
        html: "7.1 ",
      },
    },
    {
      "questions.subject": {
        value: "Easy to find job online",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q4",
      },
      "fact_table.ratings": {
        value: 24,
      },
      "fact_table.priority_score": {
        value: 1.4284076633220322,
        rendered: "1.43",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.5910570874837722,
        rendered: "0.59",
        html: "13.  Easy to find job online  0.59 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.5833,
        rendered: "7.58",
        html: "7.6 ",
      },
    },
    {
      "questions.subject": {
        value: "Proficiency interviewer",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q4",
      },
      "fact_table.ratings": {
        value: 24,
      },
      "fact_table.priority_score": {
        value: 1.6707279387027105,
        rendered: "1.67",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.549274398758165,
        rendered: "0.55",
        html: "8.  Proficiency interviewer  0.55 ",
      },
      "fact_table.avg_star_rating": {
        value: 6.9583,
        rendered: "6.96",
        html: "7.0 ",
      },
    },
    {
      "questions.subject": {
        value: "Useful job advertisement",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q4",
      },
      "fact_table.ratings": {
        value: 23,
      },
      "fact_table.priority_score": {
        value: 0.5135852813991472,
        rendered: "0.51",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.17119509379971573,
        rendered: "0.17",
        html: "30.  Useful job advertisement  0.17 ",
      },
      "fact_table.avg_star_rating": {
        value: 7,
        rendered: "7.00",
        filterable_value: "7.0",
        html: "7.0 ",
      },
    },
    {
      "questions.subject": {
        value: "Proficiency recruiter",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q4",
      },
      "fact_table.ratings": {
        value: 23,
      },
      "fact_table.priority_score": {
        value: 1.288062296728277,
        rendered: "1.29",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.45577378604022406,
        rendered: "0.46",
        html: "15.  Proficiency recruiter  0.46 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.1739,
        rendered: "7.17",
        html: "7.2 ",
      },
    },
    {
      "questions.subject": {
        value: "Proficiency recruiter",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q3",
      },
      "fact_table.ratings": {
        value: 23,
      },
      "fact_table.priority_score": {
        value: 1.4601577102284575,
        rendered: "1.46",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.6458302933470996,
        rendered: "0.65",
        html: "12.  Proficiency recruiter  0.65 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.7391,
        rendered: "7.74",
        html: "7.7 ",
      },
    },
    {
      "questions.subject": {
        value: "Proficiency interviewer",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q3",
      },
      "fact_table.ratings": {
        value: 23,
      },
      "fact_table.priority_score": {
        value: 1.5951581499667271,
        rendered: "1.60",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.7487247828991913,
        rendered: "0.75",
        html: "10.  Proficiency interviewer  0.75 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.8695,
        rendered: "7.87",
        html: "7.9 ",
      },
    },
    {
      "questions.subject": {
        value: "Easy to find job online",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q3",
      },
      "fact_table.ratings": {
        value: 23,
      },
      "fact_table.priority_score": {
        value: 0.34903230767856225,
        rendered: "0.35",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.25084972522535737,
        rendered: "0.25",
        html: "33.  Easy to find job online  0.25 ",
      },
      "fact_table.avg_star_rating": {
        value: 8.6086,
        rendered: "8.61",
        html: "8.6 ",
      },
    },
    {
      "questions.subject": {
        value: "Quick response",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q3",
      },
      "fact_table.ratings": {
        value: 20,
      },
      "fact_table.priority_score": {
        value: 1.7109360475921593,
        rendered: "1.71",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.6221585627607852,
        rendered: "0.62",
        html: "6.  Quick response  0.62 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.25,
        rendered: "7.25",
        html: "7.3 ",
      },
    },
    {
      "questions.subject": {
        value: "Amount of communication",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q1",
      },
      "fact_table.ratings": {
        value: 18,
      },
      "fact_table.priority_score": {
        value: 0.7119639932224674,
        rendered: "0.71",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.27858976100425237,
        rendered: "0.28",
        html: "25.  Amount of communication  0.28 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.4444,
        rendered: "7.44",
        html: "7.4 ",
      },
    },
    {
      "questions.subject": {
        value: "Useful job advertisement",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q3",
      },
      "fact_table.ratings": {
        value: 18,
      },
      "fact_table.priority_score": {
        value: 0.8268318608887242,
        rendered: "0.83",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.33824171032469796,
        rendered: "0.34",
        html: "23.  Useful job advertisement  0.34 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.5555,
        rendered: "7.56",
        html: "7.6 ",
      },
    },
    {
      "questions.subject": {
        value: "Amount of communication",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q4",
      },
      "fact_table.ratings": {
        value: 18,
      },
      "fact_table.priority_score": {
        value: 0.16580791662929406,
        rendered: "0.17",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.05426361978966293,
        rendered: "0.05",
        html: "38.  Amount of communication  0.05 ",
      },
      "fact_table.avg_star_rating": {
        value: 6.9444,
        rendered: "6.94",
        html: "6.9 ",
      },
    },
    {
      "questions.subject": {
        value: "Quick and easy application form",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q3",
      },
      "fact_table.ratings": {
        value: 18,
      },
      "fact_table.priority_score": {
        value: 0.9633930120391303,
        rendered: "0.96",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.3689464660076326,
        rendered: "0.37",
        html: "20.  Quick and easy application form  0.37 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.3888,
        rendered: "7.39",
        html: "7.4 ",
      },
    },
    {
      "questions.subject": {
        value: "Speed of the process",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q3",
      },
      "fact_table.ratings": {
        value: 14,
      },
      "fact_table.priority_score": {
        value: 1.3781628437629856,
        rendered: "1.38",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.44869374695197317,
        rendered: "0.45",
        html: "14.  Speed of the process  0.45 ",
      },
      "fact_table.avg_star_rating": {
        value: 6.9285,
        rendered: "6.93",
        html: "6.9 ",
      },
    },
    {
      "questions.subject": {
        value: "Planning of interview(s)",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q3",
      },
      "fact_table.ratings": {
        value: 14,
      },
      "fact_table.priority_score": {
        value: 0.21918630068765743,
        rendered: "0.22",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.08075242260901795,
        rendered: "0.08",
        html: "36.  Planning of interview(s)  0.08 ",
      },
      "fact_table.avg_star_rating": {
        value: 7.2857,
        rendered: "7.29",
        html: "7.3 ",
      },
    },
    {
      "questions.subject": {
        value: "Amount of communication",
      },
      "fact_table.filterdate_quarter_of_year": {
        value: "Q3",
      },
      "fact_table.ratings": {
        value: 8,
      },
      "fact_table.priority_score": {
        value: 1.9403870715523999,
        rendered: "1.94",
      },
      "fact_table.abs_correlation_coefficient": {
        value: 0.5749295026821926,
        rendered: "0.57",
        html: "2.  Amount of communication  0.57 ",
      },
      "fact_table.avg_star_rating": {
        value: 6.625,
        rendered: "6.63",
        html: "6.6 ",
      },
    },
  ];

  const minX = d3.min(dataJson, d => d['fact_table.avg_star_rating']['rendered'])
  const maxX = d3.max(dataJson, d => d['fact_table.avg_star_rating']['rendered'])
  
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

  console.log('arryOfAvg :', arryOfAvg)
  
  var midItem = ( (arryOfAvg[arryOfAvg.length -1] - arryOfAvg[0]) / 2 ) + arryOfAvg[0]
  const avg_satisfaction = "7.0"

  var colorMatcher = {
    color: dataJson.map((d)=> {
      if(d['fact_table.abs_correlation_coefficient']['rendered'] >= 0.5 && d['fact_table.avg_star_rating']['rendered'] <= parseInt(avg_satisfaction)) {
          return "#f29696" // red
      }
      if(d['fact_table.abs_correlation_coefficient']['rendered'] <= 0.5 && d['fact_table.avg_star_rating']['rendered'] <= parseInt(avg_satisfaction)) {
          return "#f7e39c" // yellow
      }
      if (d['fact_table.abs_correlation_coefficient']['rendered'] >= 0.5 && d['fact_table.avg_star_rating']['rendered'] >= parseInt(avg_satisfaction)) {
          return "#bddaa5" // green
      }
      if (d['fact_table.abs_correlation_coefficient']['rendered'] <= 0.5 && d['fact_table.avg_star_rating']['rendered'] >= parseInt(avg_satisfaction)) {
          return "#d5e8ff" // blue
      }
    })
  };

  var seqWidth = []
  function widthCalc() {
    const containerWidth = width
    const widthEachSequence = containerWidth / arryOfAvg.length

    for (let i = 0; i < arryOfAvg.length; i++) {
      const element = arryOfAvg[i];
      if (parseInt(avg_satisfaction) === element) {
        seqWidth = {
          leftWidth: (widthEachSequence * i) + 100,
          rightWidth: (containerWidth - (widthEachSequence * i)) - 100
        }
        return seqWidth
      }
    }
  }
  const widthCalculator = widthCalc();

  var divGroup = [
    {
      "class": "topLeft",
      "transform": 'translate(0px, 0px)',
      "color": "#f29696", // red
      "text": "Improve",
      "alignment": "left",
      'width': widthCalculator.leftWidth
    }, {
      "class": "topRight",
      "transform": "translate("+ (widthCalculator.leftWidth + 10 + 'px') +", 0px)",
      "color": "#bddaa5", // green
      "text": "Leverage",
      "alignment": "end",
      'width': widthCalculator.rightWidth - 10
    }, {
      "class": "bottomLeft",
      "transform": 'translate(0px, 260px)',
      "color": "#f7e39c", // yellow
      "text": "Monitor",
      "alignment": "left",
      'width': widthCalculator.leftWidth
    }, {
      "class": "bottomRight",
      "transform": "translate("+ (widthCalculator.leftWidth + 10 + 'px') +", 260px)",
      "color": "#d5e8ff", // blue
      "text": "Maintain",
      "alignment": "end",
      'width': widthCalculator.rightWidth - 10
    }
  ];

  //colored boxes with text inside
  visual.append('g')
    .selectAll("foreignObject")
    .data(divGroup)
    .enter()
    .append("foreignObject")
      .attr('width', function (d) { return d.width + 'px' })
      .attr('height', '250px')
      .attr('class', function (d) {return d.class;})
      .attr("fill", function (d) {return d.color})
      .style('background-color', function (d) {return d.color})
      .style('height', '250px')
      .style("padding", "5px")
      .style('border-radius', '10px')
      .style("transform", function (d) {return d.transform})
    .append("xhtml:div")
    .style('background-color', function (d) {return d.color})
    .style("height", "100%")
    .style("text-align", function (d) {return d.alignment})
    .style("padding", "5px")
    .on('click', function() {
        tooltip.style("visibility", "hidden");
    })
    .html(d => d.text);

  //Tooltips
  var tooltip = d3.select("#chart")
    .data(dataJson.slice(0, 25))
    .append("foreignObject")
    .style("visibility", "hidden")
    .style("font-size", '12px')
    .style("background-color", 'rgba(34, 42, 60, 0.9)')
    .style('color', '#ffffff')
    .style('border-radius', '5px')
    .style('padding', '10px')
    .style('position', 'absolute')
    .style('z-index', '3')
    .style('width', '180px');
  
  // Circles with text inside
  var elemEnter = visual.append('g').selectAll('g myCircleText')
    .data(dataJson.slice(0, 25))
    .enter()
    .append("g")
    .style('cursor', 'pointer')
    .attr("transform", function(d){return "translate("+ (x(d['fact_table.avg_star_rating']['rendered'])) +","+ (y(d['fact_table.abs_correlation_coefficient']['rendered'])) +")"});
    
  // Circles click functionalities
  elemEnter.on("click", function(d) {
    const subject = d['questions.subject'] ? d['questions.subject']['value'] : '';
    const subjectElement = subject ? `<strong style="font-size: 13px; line-height: 24px">${subject}</strong> <br>` : '';
    const question = d['survey_question.question'] ? d['survey_question.question']['value'] + '?' : '';
    const questionElement = question ? `<strong style="font-size: 11px; display: block; margin: 5px 0;">${question}</strong>` : '';
    tooltip.style("visibility", "visible")
    tooltip.html(
        subjectElement + 
        questionElement +
        `<span style="line-height: 26px">Ratings: </span>` + 
        `<strong style="font-size: 13px; font-family: Arial, Helvetica, sans-serif;">${d["questions.subject"]['value']}</strong>` + 
        `<br> <span style="line-height: 26px">Satisfaction: </span>` + 
        `<strong style="font-size: 13px; font-family: Arial, Helvetica, sans-serif">${d['fact_table.avg_star_rating']['rendered']}</strong>` +
        `<br> <span style="line-height: 26px">Correlation (NPS): </span>` + 
        `<strong style="font-size: 13px; font-family: Arial, Helvetica, sans-serif;">${d['fact_table.abs_correlation_coefficient']['rendered']}</strong><br><br>` 
    )
    .style("left", (d3.event.pageX) + "px")
    .style("top", (d3.event.pageY) + "px");

    // urls is been commited in the newData in order to check the argument validity
    if (d["questions.subject"].links) {
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
              ">Inspect item</strong>`);
      cta.on('click', function (d) {
        window.open(d["questions.subject"].links[0].url, "_self")
      });
    }
  });
    
  /*Create the circle for each block */
  var circle = elemEnter.append("circle")
    .attr("r", 12 )
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
    
  // Legend section
  var legendCircle = legend.selectAll('foreignObject')
    .data(colorMatcher.color.slice(0, 10))
    .enter();
    
  legendCircle.append('foreignObject')
    .attr('x', 0 )
    .attr('y', function(d, i) { return i*50; })
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
    .data(dataJson.slice(0, 10))
    .enter()
    .append('foreignObject')
    .attr('x', 0 )
    .attr('y', function(d, i) { return i*50 })
    .attr('width', '300px')
    .attr('height', '40px')
    .style('line-height', '20px')

    .append("xhtml:div")
    .style('width', '300px')
    .style('height', '40px')
    .style('line-height', '20px')
    .html(function(d, i) { return d['questions.subject']['value'] });
}
//=== Visual end here ===//

//Display message if response is not enough
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
      <span style="line-height: 46px">Please invite more clients.</span>
  `);
}

var responses = 20;
if (responses > 19) {
    visual();
} else {
    message();
}
