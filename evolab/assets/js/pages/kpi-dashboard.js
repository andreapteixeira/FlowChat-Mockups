//
// Dashboard
//

// Class definition
var KPIDashboard = function() {


    // TOTAL MEMBER DOUGHNUT CHART

    var widgetMembersTypeChart = function() {
        if ($('#fc_members_type_chart').length == 0) {
            return;
        }

        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };

        var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        35, 20, 35, 10
                    ],
                    backgroundColor: [
                        '#00f0c8',
                        '#F72586',
                        '#7401B8',
                        '#FFC300'
                    ]
                }],
                labels: [
                    'Basic',
                    'Growth',
                    'Pro',
                    'Enterprise'
                ]
            },
            options: {
                cutoutPercentage: 75,
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Total Members'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KTApp.getStateColor('dark'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                }
            }
        };

        var ctx = document.getElementById('fc_members_type_chart').getContext('2d');
        var myDoughnut = new Chart(ctx, config);
    }



// MEMBER CHART
var widgetMembersChart = function() {
        if (!document.getElementById('fc_members_chart')) {
            return;
        }

        // Main chart
        var max = 600;
        var color = KTApp.getStateColor('brand');
        var ctx = document.getElementById('fc_members_chart').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [156, 267, 183, 198, 204, 243, 258, 357, 336, 355, 390, 443];

        var mainConfig = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Members',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KTApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Members'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KTApp.getStateColor('dark'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KTUtil.addResizeHandler(function() {
            chart.update();
        });
    }



// REVENUE CHART
var widgetRevenueChart = function() {
        if (!document.getElementById('fc_revenue_chart')) {
            return;
        }

        // Main chart
        var max = 50000;
        var color = KTApp.getStateColor('danger');
        var ctx = document.getElementById('fc_revenue_chart').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [15600, 16700, 18300, 19800, 20400, 21300, 25800, 28700, 33600, 35500, 39800, 44300];

        var mainConfig = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Revenue',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KTApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Revenue'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KTApp.getStateColor('dark'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KTUtil.addResizeHandler(function() {
            chart.update();
        });
    }


// NEW MEMBER BAR CHART

var widgetNewMembersChart = function() {
        var barChartData = {
            labels: ['Feb. 21', 'Mar. 21', 'Apr. 21', 'May 21', 'Jun. 21', 'Jul. 21', 'Aug. 21', 'Sep. 21', 'Oct. 21', 'Nov. 21', 'Dec. 21', 'Jan. 22',],
            datasets: [{
                label: 'Churned',
                backgroundColor: '#666',
                borderColor: '#666',
                borderWidth: 1,
                data: [
                    -4,
                    -7,
                    -8,
                    -5,
                    -1,
                    -8,
                    -4,
                    -6,
                    -2,
                    -1,
                    -3,
                    -5
                ]
            }, {
                label: 'Basic',
                backgroundColor: '#00f0c8',
                borderColor: '#00f0c8',
                borderWidth: 1,
                data: [
                    4,
                    7,
                    8,
                    5,
                    10,
                    18,
                    24,
                    8,
                    10,
                    11,
                    17,
                    21
                ]
            }, {
                label: 'Growth',
                backgroundColor: '#F72586',
                borderColor: '#F72586',
                borderWidth: 1,
                data: [
                    3,
                    2,
                    5,
                    10,
                    3,
                    5,
                    14,
                    10,
                    2,
                    6,
                    7,
                    11
                ]
            }, {
                label: 'Pro',
                backgroundColor: '#7401B8',
                borderColor: '#7401B8',
                borderWidth: 1,
                data: [
                    5,
                    6,
                    4,
                    14,
                    8,
                    9,
                    14,
                    8,
                    11,
                    7,
                    13,
                    17
                ]
            }, {
                label: 'Enterprise',
                backgroundColor: '#FFC300',
                borderColor: '#FFC300',
                borderWidth: 1,
                data: [
                    1,
                    2,
                    0,
                    0,
                    0,
                    1,
                    4,
                    2,
                    1,
                    4,
                    3,
                    5
                ]
            }]

        };

        var ctx = $('#fc_new_members_chart');
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                title: {
                    display: false,
                    text: 'New Members - Plans:'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KTApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        gridLines: {
                            color: KTApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KTApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {                         
                            stepSize: 10,
                            display: true,
                            beginAtZero: true,
                            fontColor: KTApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                }
            }
        });
    }

        // MEMBER EVOLUTION CHART

        var widgetMembersEvolutionChart = function() {
        var barChartData = {
            labels: ['Feb. 21', 'Mar. 21', 'Apr. 21', 'May 21', 'Jun. 21', 'Jul. 21', 'Aug. 21', 'Sep. 21', 'Oct. 21', 'Nov. 21', 'Dec. 21', 'Jan. 22', ],
            datasets: [{
                label: 'Basic',
                backgroundColor: '#00f0c8',
                borderColor: '#00f0c8',
                borderWidth: 3,
                borderDash: [5, 5],
                fill: false,
                data: [
                    23,
                    24,
                    34,
                    80,
                    91,
                    122,
                    135,
                    176,
                    156,
                    199,
                    211,
                    260
                ]
            }, {
                label: 'Growth',
                backgroundColor: '#F72586',
                borderColor: '#F72586',
                borderWidth: 3,
                borderDash: [5, 5],
                fill: false,
                data: [
                    4,
                    30,
                    56,
                    76,
                    54,
                    76,
                    91,
                    111,
                    126,
                    98,
                    154,
                    180
                ]
            }, {
                label: 'Pro',
                backgroundColor: '#7401B8',
                borderColor: '#7401B8',
                borderWidth: 3,
                borderDash: [5, 5],
                fill: false,
                data: [
                    12,
                    23,
                    32,
                    43,
                    65,
                    45,
                    64,
                    79,
                    125,
                    134,
                    167,
                    194
                ]
            }, {
                label: 'Enterprise',
                backgroundColor: '#FFC300',
                borderColor: '#FFC300',
                borderWidth: 3,
                borderDash: [5, 5],
                fill: false,
                data: [
                    2,
                    2,
                    4,
                    5,
                    5,
                    7,
                    8,
                    9,
                    13,
                    9,
                    15,
                    21
                ]
            }, {
                label: 'All Plans',
                backgroundColor: 'rgba(73, 97, 255, 0.1)',
                borderColor: KTApp.getStateColor('brand'),
                borderWidth: 3,
                fill: true,
                data: [
                    72,
                    82,
                    94,
                    107,
                    165,
                    155,
                    234,
                    279,
                    345,
                    390,
                    376,
                    443
                ]
            }]

        };

        var ctx = $('#fc_members_evolution_chart');
        var myBarChart = new Chart(ctx, {
            type: 'line',
            data: barChartData,
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Members Evolution - Plans:'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KTApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: KTApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KTApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {                         
                            stepSize: 50,
                            display: true,
                            beginAtZero: true,
                            fontColor: KTApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                }
            }
        });
    }

    // CHURN REQUESTS CHART

    var widgetChurnRequestsChart = function() {
        if (!document.getElementById('fc_churn_requests_chart')) {
            return;
        }

        var MONTHS = ['Feb. 21', 'Mar. 21', 'Apr. 21', 'May 21', 'Jun. 21', 'Jul. 21', 'Aug. 21', 'Sep. 21', 'Oct. 21', 'Nov. 21', 'Dec. 21', 'Jan. 22', ];

        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['Feb. 21', 'Mar. 21', 'Apr. 21', 'May 21', 'Jun. 21', 'Jul. 21', 'Aug. 21', 'Sep. 21', 'Oct. 21', 'Nov. 21', 'Dec. 21', 'Jan. 22',],
            datasets: [{
                label: 'Churn Requests',
                backgroundColor: color(KTApp.getStateColor('danger')).alpha(1).rgbString(),
                borderWidth: 0,
                data: [2, 3, 5, 10, 23, 15, 15, 27, 30, 34, 28, 25]
            }, {
                label: 'Churn Retention',
                backgroundColor: color(KTApp.getStateColor('danger')).alpha(0.3).rgbString(),
                borderWidth: 0,
                data: [1, 1, 2, 3, 3, 7, 7, 12, 15, 17, 12, 10]
            }]
        };

        var ctx = document.getElementById('fc_churn_requests_chart').getContext('2d');
        var myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.60,
                        barPercentage: 0.80,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KTApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.60,
                        barPercentage: 0.80,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: KTApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KTApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {                          
                            stepSize: 5,
                            display: true,
                            beginAtZero: true,
                            fontColor: KTApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KTApp.getStateColor('dark'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }

    // FAILED PAYMENTS CHART

        var widgetPaymentsFailedChart = function() {
        if (!document.getElementById('fc_payments_failed_chart')) {
            return;
        }

        var MONTHS = ['Feb. 21', 'Mar. 21', 'Apr. 21', 'May 21', 'Jun. 21', 'Jul. 21', 'Aug. 21', 'Sep. 21', 'Oct. 21', 'Nov. 21', 'Dec. 21', 'Jan. 22', ];

        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['Feb. 21', 'Mar. 21', 'Apr. 21', 'May 21', 'Jun. 21', 'Jul. 21', 'Aug. 21', 'Sep. 21', 'Oct. 21', 'Nov. 21', 'Dec. 21', 'Jan. 22',],
            datasets: [{
                label: 'Payments Failed',
                backgroundColor: color(KTApp.getStateColor('warning')).alpha(1).rgbString(),
                borderWidth: 0,
                data: [2, 3, 5, 10, 23, 15, 15, 27, 30, 34, 28, 25]
            }, {
                label: 'Payments Recovered',
                backgroundColor: color(KTApp.getStateColor('warning')).alpha(0.3).rgbString(),
                borderWidth: 0,
                data: [1, 1, 2, 3, 3, 7, 7, 12, 15, 17, 12, 10]
            }]
        };

        var ctx = document.getElementById('fc_payments_failed_chart').getContext('2d');
        var myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.60,
                        barPercentage: 0.80,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KTApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.60,
                        barPercentage: 0.80,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: KTApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KTApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {                          
                            stepSize: 5,
                            display: true,
                            beginAtZero: true,
                            fontColor: KTApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KTApp.getStateColor('dark'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }

    return {
        init: function() {
            widgetMembersTypeChart();
            widgetMembersChart();
            widgetRevenueChart();
            widgetNewMembersChart();
            widgetMembersEvolutionChart();
            widgetChurnRequestsChart();
            widgetPaymentsFailedChart();
        }
    };
}();


// Class initialization
jQuery(document).ready(function() {
    KPIDashboard.init();
});