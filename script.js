
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
    
    var data =  [
                    {
                        "survey_question.subject": {
                            "value": "Useful job advertisement",
                            "links": [
                                {
                                    "label": "by Response Comment",
                                    "label_prefix": "by",
                                    "label_value": "Response Comment",
                                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Useful+job+advertisement&sorts=survey_question.subject desc&limit=500&column_limit=50",
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
                            "value": 0.018910678427468738
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
                            "value": "Speed of the process",
                            "links": [
                                {
                                    "label": "by Response Comment",
                                    "label_prefix": "by",
                                    "label_value": "Response Comment",
                                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Speed+of+the+process&sorts=survey_question.subject desc&limit=500&column_limit=50",
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
                            "value": 0.0403104595990762
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
                            "value": "Quick response",
                            "links": [
                                {
                                    "label": "by Response Comment",
                                    "label_prefix": "by",
                                    "label_value": "Response Comment",
                                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Quick+response&sorts=survey_question.subject desc&limit=500&column_limit=50",
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
                            "value": 0.05319808084831708
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
                                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Quick+and+easy+application+form&sorts=survey_question.subject desc&limit=500&column_limit=50",
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
                            "value": 0.015810210814724848
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
                            "value": "Proficiency recruiter",
                            "links": [
                                {
                                    "label": "by Response Comment",
                                    "label_prefix": "by",
                                    "label_value": "Response Comment",
                                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Proficiency+recruiter&sorts=survey_question.subject desc&limit=500&column_limit=50",
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
                            "value": 0.08173069772375725
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
                            "value": "Proficiency interviewer",
                            "links": [
                                {
                                    "label": "by Response Comment",
                                    "label_prefix": "by",
                                    "label_value": "Response Comment",
                                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Proficiency+interviewer&sorts=survey_question.subject desc&limit=500&column_limit=50",
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
                            "value": 0.0891134472845148
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
                            "value": "Preparation of interview(s)",
                            "links": [
                                {
                                    "label": "by Response Comment",
                                    "label_prefix": "by",
                                    "label_value": "Response Comment",
                                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Preparation+of+interview%28s%29&sorts=survey_question.subject desc&limit=500&column_limit=50",
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
                            "value": 0.09336256261996499
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
                            "value": "Planning of interview(s)",
                            "links": [
                                {
                                    "label": "by Response Comment",
                                    "label_prefix": "by",
                                    "label_value": "Response Comment",
                                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Planning+of+interview%28s%29&sorts=survey_question.subject desc&limit=500&column_limit=50",
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
                            "value": 0.03883759755167652
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
                            "value": "Easy to find job online",
                            "links": [
                                {
                                    "label": "by Response Comment",
                                    "label_prefix": "by",
                                    "label_value": "Response Comment",
                                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Easy+to+find+job+online&sorts=survey_question.subject desc&limit=500&column_limit=50",
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
                            "value": 0.01851550912679216
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
                            "value": "Amount of communication",
                            "links": [
                                {
                                    "label": "by Response Comment",
                                    "label_prefix": "by",
                                    "label_value": "Response Comment",
                                    "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating&f[survey_question.ratingdeleted]=no&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Amount+of+communication&sorts=survey_question.subject desc&limit=500&column_limit=50",
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
                            "value": 0.025331847986311825
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
    
    var newData = [
        {
            "survey_question.subject": {
                "value": "Preparation of interview(s)",
                // "links": [
                //     {
                //         "label": "by Response Comment",
                //         "label_prefix": "by",
                //         "label_value": "Response Comment",
                //         "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating,survey_question.question&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.ratingdeleted]=no&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Preparation+of+interview%28s%29&sorts=survey_question.ratings desc&limit=500&column_limit=50&total=on",
                //         "type": "drill",
                //         "type_label": "Drill into Preparation of interview(s)",
                //         "type_label_prefix": "Drill into",
                //         "type_label_value": "Preparation of interview(s)"
                //     }
                // ],
                "html": "Preparation of interview(s) "
            },
            "survey_question.question": {
                "value": "It was easy to get the information I needed to prepare myself for the interview"
            },
            "survey_question.ratings": {
                "value": 129
            },
            "survey_question.priority_score": {
                "value": 0.09336256261996499
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
                // "links": [
                //     {
                //         "label": "by Response Comment",
                //         "label_prefix": "by",
                //         "label_value": "Response Comment",
                //         "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating,survey_question.question&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.ratingdeleted]=no&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Proficiency+interviewer&sorts=survey_question.ratings desc&limit=500&column_limit=50&total=on",
                //         "type": "drill",
                //         "type_label": "Drill into Proficiency interviewer",
                //         "type_label_prefix": "Drill into",
                //         "type_label_value": "Proficiency interviewer"
                //     }
                // ],
                "html": "Proficiency interviewer "
            },
            "survey_question.question": {
                "value": "The interviewers were professional and clear in their communication"
            },
            "survey_question.ratings": {
                "value": 124
            },
            "survey_question.priority_score": {
                "value": 0.0891134472845148
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
                // "links": [
                //     {
                //         "label": "by Response Comment",
                //         "label_prefix": "by",
                //         "label_value": "Response Comment",
                //         "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating,survey_question.question&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.ratingdeleted]=no&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Proficiency+recruiter&sorts=survey_question.ratings desc&limit=500&column_limit=50&total=on",
                //         "type": "drill",
                //         "type_label": "Drill into Proficiency recruiter",
                //         "type_label_prefix": "Drill into",
                //         "type_label_value": "Proficiency recruiter"
                //     }
                // ],
                "html": "Proficiency recruiter "
            },
            "survey_question.question": {
                "value": "The recruiter was professional and clear in her/his communication"
            },
            "survey_question.ratings": {
                "value": 123
            },
            "survey_question.priority_score": {
                "value": 0.08173069772375725
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
                // "links": [
                //     {
                //         "label": "by Response Comment",
                //         "label_prefix": "by",
                //         "label_value": "Response Comment",
                //         "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating,survey_question.question&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.ratingdeleted]=no&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Quick+response&sorts=survey_question.ratings desc&limit=500&column_limit=50&total=on",
                //         "type": "drill",
                //         "type_label": "Drill into Quick response",
                //         "type_label_prefix": "Drill into",
                //         "type_label_value": "Quick response"
                //     }
                // ],
                "html": "Quick response "
            },
            "survey_question.question": {
                "value": "We quickly responded to your application"
            },
            "survey_question.ratings": {
                "value": 117
            },
            "survey_question.priority_score": {
                "value": 0.05319808084831708
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
                // "links": [
                //     {
                //         "label": "by Response Comment",
                //         "label_prefix": "by",
                //         "label_value": "Response Comment",
                //         "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating,survey_question.question&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.ratingdeleted]=no&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Quick+and+easy+application+form&sorts=survey_question.ratings desc&limit=500&column_limit=50&total=on",
                //         "type": "drill",
                //         "type_label": "Drill into Quick and easy application form",
                //         "type_label_prefix": "Drill into",
                //         "type_label_value": "Quick and easy application form"
                //     }
                // ],
                "html": "Quick and easy application form "
            },
            "survey_question.question": {
                "value": "It was easy and quick to complete the online application form"
            },
            "survey_question.ratings": {
                "value": 104
            },
            "survey_question.priority_score": {
                "value": 0.015810210814724848
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
                // "links": [
                //     {
                //         "label": "by Response Comment",
                //         "label_prefix": "by",
                //         "label_value": "Response Comment",
                //         "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating,survey_question.question&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.ratingdeleted]=no&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Easy+to+find+job+online&sorts=survey_question.ratings desc&limit=500&column_limit=50&total=on",
                //         "type": "drill",
                //         "type_label": "Drill into Easy to find job online",
                //         "type_label_prefix": "Drill into",
                //         "type_label_value": "Easy to find job online"
                //     }
                // ],
                "html": "Easy to find job online "
            },
            "survey_question.question": {
                "value": "It was easy to find the job online"
            },
            "survey_question.ratings": {
                "value": 103
            },
            "survey_question.priority_score": {
                "value": 0.01851550912679216
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
                // "links": [
                //     {
                //         "label": "by Response Comment",
                //         "label_prefix": "by",
                //         "label_value": "Response Comment",
                //         "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating,survey_question.question&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.ratingdeleted]=no&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Speed+of+the+process&sorts=survey_question.ratings desc&limit=500&column_limit=50&total=on",
                //         "type": "drill",
                //         "type_label": "Drill into Speed of the process",
                //         "type_label_prefix": "Drill into",
                //         "type_label_value": "Speed of the process"
                //     }
                // ],
                "html": "Speed of the process "
            },
            "survey_question.question": {
                "value": "The process went quick and smooth"
            },
            "survey_question.ratings": {
                "value": 95
            },
            "survey_question.priority_score": {
                "value": 0.0403104595990762
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
                // "links": [
                //     {
                //         "label": "by Response Comment",
                //         "label_prefix": "by",
                //         "label_value": "Response Comment",
                //         "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating,survey_question.question&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.ratingdeleted]=no&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Planning+of+interview%28s%29&sorts=survey_question.ratings desc&limit=500&column_limit=50&total=on",
                //         "type": "drill",
                //         "type_label": "Drill into Planning of interview(s)",
                //         "type_label_prefix": "Drill into",
                //         "type_label_value": "Planning of interview(s)"
                //     }
                // ],
                "html": "Planning of interview(s) "
            },
            "survey_question.question": {
                "value": "The scheduling of the interview(s) went smoothly"
            },
            "survey_question.ratings": {
                "value": 95
            },
            "survey_question.priority_score": {
                "value": 0.03883759755167652
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
                // "links": [
                //     {
                //         "label": "by Response Comment",
                //         "label_prefix": "by",
                //         "label_value": "Response Comment",
                //         "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating,survey_question.question&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.ratingdeleted]=no&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Useful+job+advertisement&sorts=survey_question.ratings desc&limit=500&column_limit=50&total=on",
                //         "type": "drill",
                //         "type_label": "Drill into Useful job advertisement",
                //         "type_label_prefix": "Drill into",
                //         "type_label_value": "Useful job advertisement"
                //     }
                // ],
                "html": "Useful job advertisement "
            },
            "survey_question.question": {
                "value": "The info in job advertisement was useful"
            },
            "survey_question.ratings": {
                "value": 80
            },
            "survey_question.priority_score": {
                "value": 0.018910678427468738
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
                // "links": [
                //     {
                //         "label": "by Response Comment",
                //         "label_prefix": "by",
                //         "label_value": "Response Comment",
                //         "url": "/explore/external_survey_questions/grid5x5_tutorial?fields=survey_question.comment,survey_question.ratings,survey_question.priority_score,survey_question.abs_correlation_coefficient,survey_question.avg_rating,survey_question.question&f[survey_question.companyid]=27252&f[survey_question.language]=English&f[survey_question.ratingdeleted]=no&f[survey_question.rating]=%3E0&f[survey_question.formtitle]=Rejection+after+interview&f[survey_question.subject]=Amount+of+communication&sorts=survey_question.ratings desc&limit=500&column_limit=50&total=on",
                //         "type": "drill",
                //         "type_label": "Drill into Amount of communication",
                //         "type_label_prefix": "Drill into",
                //         "type_label_value": "Amount of communication"
                //     }
                // ],
                "html": "Amount of communication "
            },
            "survey_question.question": {
                "value": "There was sufficient communication during the process to keep me up to date"
            },
            "survey_question.ratings": {
                "value": 54
            },
            "survey_question.priority_score": {
                "value": 0.025331847986311825
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
    
    const minX = d3.min(newData, d => d['survey_question.avg_rating']['rendered'])
    const maxX = d3.max(newData, d => d['survey_question.avg_rating']['rendered'])
    
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
    
    var midItem = ( (arryOfAvg[arryOfAvg.length -1] - arryOfAvg[0]) / 2 ) + arryOfAvg[0]
    
    var colorMatcher = {
        color: newData.map((d)=> {
            if(d['survey_question.abs_correlation_coefficient']['rendered'] >= 0.5 && d['survey_question.avg_rating']['rendered'] <= midItem) {
                return "#f29696" // red
            }
            if(d['survey_question.abs_correlation_coefficient']['rendered'] <= 0.5 && d['survey_question.avg_rating']['rendered'] <= midItem) {
                return "#f7e39c" // yellow
            }
            if (d['survey_question.abs_correlation_coefficient']['rendered'] >= 0.5 && d['survey_question.avg_rating']['rendered'] >= midItem) {
                return "#bddaa5" // green
            }
            if (d['survey_question.abs_correlation_coefficient']['rendered'] <= 0.5 && d['survey_question.avg_rating']['rendered'] >= midItem) {
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
        .on('click', function() {
            tooltip.style("visibility", "hidden");
        })
        .html(d => d.text);
    console.log(newData);
    //Tooltips
    var tooltip = d3.select("#chart")
        .data(newData.slice(0, 25))
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
        .data(newData.slice(0, 25))
        .enter()
        .append("g")
        .style('cursor', 'pointer')
        .attr("transform", function(d){return "translate("+ (x(d['survey_question.avg_rating']['rendered'])) +","+ (y(d['survey_question.abs_correlation_coefficient']['rendered'])) +")"});
        
        // Circles click functionalities
        elemEnter.on("click", function(d) {
        const subject = d['survey_question.subject'] ? d['survey_question.subject']['value'] : '';
        const subjectElement = subject ? `<strong style="font-size: 13px; line-height: 24px">${subject}</strong> <br>` : '';
        const question = d['survey_question.question'] ? d['survey_question.question']['value'] + '?' : '';
        const questionElement = question ? `<strong style="font-size: 11px; display: block; margin: 5px 0;">${question}</strong>` : '';
        tooltip.style("visibility", "visible")
        tooltip.html(
            subjectElement + 
            questionElement +
            `<span style="line-height: 26px">Ratings: </span>` + 
            `<strong style="font-size: 13px; font-family: Arial, Helvetica, sans-serif;">${d["survey_question.ratings"]['value']}</strong>` + 
            `<br> <span style="line-height: 26px">Satisfaction: </span>` + 
            `<strong style="font-size: 13px; font-family: Arial, Helvetica, sans-serif">${d['survey_question.avg_rating']['rendered']}</strong>` +
            `<br> <span style="line-height: 26px">Correlation (NPS): </span>` + 
            `<strong style="font-size: 13px; font-family: Arial, Helvetica, sans-serif;">${d['survey_question.abs_correlation_coefficient']['rendered']}</strong><br><br>` 
        )
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY) + "px")
// urls is been commited in the newData in order to check the argument validity
        if (d["survey_question.subject"].links) {
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
                window.open(d["survey_question.subject"].links[0].url, "_self")
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
        .data(newData.slice(0, 10))
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
        .html(function(d, i) { return d['survey_question.subject']['value'] });
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
        <span style="line-height: 46px">Please invite more clients.</span>
    `);
}
var responses = 2;
if (responses > 19) {
    visual();
} else {
    message();
}

