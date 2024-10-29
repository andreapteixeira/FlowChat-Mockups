// RESULST AND CONVERSIONS CHARTS

//TEMP DATA

let resultsConversionsData = {
    totals: {
        total_messages: {
            data: [231, 432, 352, 487, 329, 393, 467, 721, 596, 551, 421, 695],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22
        },
        message_to_call: {
            data: [21, 27, 12, 17, 32, 33, 45, 21, 26, 31, 41, 53],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 32.22
        },
        total_calls: {
            data: [231, 432, 352, 487, 329, 393, 467, 721, 596, 551, 421, 695],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22        
        },
        call_to_sale: {
            data: [21, 27, 12, 17, 32, 33, 45, 21, 26, 31, 41, 53],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 32.22
        },
        total_sales: {
            data: [231, 432, 352, 487, 329, 393, 467, 721, 596, 551, 421, 695],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22
        },
        total_sales_value: {
            data: [2341.23, 4352.54, 3952.91, 4987.89, 3229.62, 3913.19, 4807.33, 7221.15, 5916.52, 5511.22, 4291.33, 6925.11],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 611509.23,
            average: 3543.11
        },
        average_sale_value: {
            data: [233.31, 432.12, 352.56, 487.92, 329.43, 393.11, 467.57, 721.82, 596.36, 551.23, 421.12, 695.22],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 32.22
        }
    },
    pipelines: [
    {
        name: "Pipeline Name One",
        total_messages: {
            data: [21, 42, 32, 47, 39, 93, 46, 72, 56, 51, 41, 65],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 659,
            average: 52.22
        },
        message_to_call: {
            data: [21, 27, 12, 17, 32, 33, 45, 21, 26, 31, 41, 53],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 33.21
        },
        total_calls: {
            data: [23, 43, 35, 87, 39, 33, 47, 71, 96, 51, 41, 65],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22        
        },
        call_to_sale: {
            data: [21, 27, 12, 17, 32, 33, 45, 21, 26, 31, 41, 53],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 12.22
        },
        total_sales: {
            data: [31, 32, 32, 48, 32, 33, 46, 72, 59, 55, 41, 65],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22
        },
        total_sales_value: {
            data: [241.23, 432.54, 392.91, 497.89, 329.62, 391.19, 487.33, 721.15, 591.52, 511.22, 421.33, 692.11],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 611509.23,
            average: 3543.11
        },
        average_sale_value: {
            data: [233.31, 432.12, 352.56, 487.92, 329.43, 393.11, 467.57, 721.82, 596.36, 551.23, 421.12, 695.22],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 65.65
        }
    },
    {
        name: "Pipeline Name Two",
        total_messages: {
            data: [231, 432, 352, 487, 329, 393, 467, 721, 596, 551, 421, 695],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22
        },
        message_to_call: {
            data: [21, 27, 12, 17, 32, 33, 45, 21, 26, 31, 41, 53],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 12.21
        },
        total_calls: {
            data: [231, 432, 352, 487, 329, 393, 467, 721, 596, 551, 421, 695],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22        
        },
        call_to_sale: {
            data: [21, 27, 12, 17, 32, 33, 45, 21, 26, 31, 41, 53],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 32.22
        },
        total_sales: {
            data: [231, 432, 352, 487, 329, 393, 467, 721, 596, 551, 421, 695],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22
        },
        total_sales_value: {
            data: [2341.23, 4352.54, 3952.91, 4987.89, 3229.62, 3913.19, 4807.33, 7221.15, 5916.52, 5511.22, 4291.33, 6925.11],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 611509.23,
            average: 3543.11
        },
        average_sale_value: {
            data: [233.31, 432.12, 352.56, 487.92, 329.43, 393.11, 467.57, 721.82, 596.36, 551.23, 421.12, 695.22],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 21.87
        }
    },
    {
        name: "Pipeline Name Three",
        total_messages: {
            data: [231, 432, 352, 487, 329, 393, 467, 721, 596, 551, 421, 695],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22
        },
        message_to_call: {
            data: [21, 27, 12, 17, 32, 33, 45, 21, 26, 31, 41, 53],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 32.22
        },
        total_calls: {
            data: [231, 432, 352, 487, 329, 393, 467, 721, 596, 551, 421, 695],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22        
        },
        call_to_sale: {
            data: [21, 27, 12, 17, 32, 33, 45, 21, 26, 31, 41, 53],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 15.54
        },
        total_sales: {
            data: [231, 432, 352, 487, 329, 393, 467, 721, 596, 551, 421, 695],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 6509,
            average: 562.22
        },
        total_sales_value: {
            data: [2341.23, 4352.54, 3952.91, 4987.89, 3229.62, 3913.19, 4807.33, 7221.15, 5916.52, 5511.22, 4291.33, 6925.11],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: 611509.23,
            average: 3543.11
        },
        average_sale_value: {
            data: [233.31, 432.12, 352.56, 487.92, 329.43, 393.11, 467.57, 721.82, 596.36, 551.23, 421.12, 695.22],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            total: "",
            average: 32.22
        }
    }
    ]
};

console.log(resultsConversionsData);


//ADD PIPELINE TABLE VALUES

if(resultsConversionsData.pipelines.length > 0) {
    for (let i=0; i<resultsConversionsData.pipelines.length; i++) {
        $("#pipelineResultsConversions tbody").append(`
            <tr role="row ">
                <td class="sorting_1 kt-font-bold align-middle" tabindex="0">${resultsConversionsData.pipelines[i].name}</td>
                <td class="text-center align-middle">
                    <div class="mr-2">${resultsConversionsData.pipelines[i].total_messages.total}
                        <small><span class="badge badge-pill badge-primary">${resultsConversionsData.pipelines[i].message_to_call.average+`%`}</span></small>
                    </div>
                </td>
                <td class="text-center align-middle">
                    <div class="mr-2">${resultsConversionsData.pipelines[i].total_calls.total}
                        <small><span class="badge badge-pill badge-primary">${resultsConversionsData.pipelines[i].call_to_sale.average+`%`}</span></small>
                    </div>
                </td>
                <td class="text-center align-middle">
                    <div class="mr-2">${resultsConversionsData.pipelines[i].total_sales.total}</div>
                </td>
                <td class="text-center align-middle">
                    <div class="mr-2">${`$`+resultsConversionsData.pipelines[i].total_sales_value.total}</div>
                </td>
                <td class="text-center align-middle">
                    <div class="mr-2">${`$`+resultsConversionsData.pipelines[i].average_sale_value.average}</div>
                </td>
            </tr>
            `)
    }; 
} else {
    $("#pipelineResultsConversions tbody").append(`
        <div class="w-100 p-5 text-center">No Records</div>
        
        `)
};


//CHARTS CONFIG
// Class definition
var reportsResultsConvertions = function() {


    // TOTAL MESSAGES CHART
    var chartTotalMessages = function() {
        if (!document.getElementById('chartTotalMessages')) {
            return;
        }

        // Main chart
        var max = Math.max(...resultsConversionsData.totals.total_messages.data)+10;
        var color = KTApp.getStateColor('brand');
        var ctx = document.getElementById('chartTotalMessages').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = resultsConversionsData.totals.total_messages.data;

        var mainConfig = {
            type: 'line',
            data: {
                labels: resultsConversionsData.totals.total_messages.labels,
                datasets: [{
                    label: 'Messages',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: "#48465b",
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Messages'
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
    };


    // MESSAGE TO CALL CHART
    var chartMessageToCall = function() {
        if (!document.getElementById('chartMessageToCall')) {
            return;
        }

        // Main chart
        var max = Math.max(...resultsConversionsData.totals.message_to_call.data)+10;
        var color = KTApp.getStateColor('warning');
        var ctx = document.getElementById('chartMessageToCall').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = resultsConversionsData.totals.message_to_call.data;

        var mainConfig = {
            type: 'line',
            data: {
                labels: resultsConversionsData.totals.message_to_call.labels,
                datasets: [{
                    label: 'Message to Call (%)',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: "#48465b",
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Message to Call (%)'
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
    };


    // TOTAL CALLS
    var chartTotalCalls = function() {
        if (!document.getElementById('chartTotalCalls')) {
            return;
        }

        // Main chart
        var max = Math.max(...resultsConversionsData.totals.total_calls.data)+10;
        var color = KTApp.getStateColor('success');
        var ctx = document.getElementById('chartTotalCalls').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = resultsConversionsData.totals.total_calls.data;

        var mainConfig = {
            type: 'line',
            data: {
                labels: resultsConversionsData.totals.total_calls.labels,
                datasets: [{
                    label: 'Calls',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: "#48465b",
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Calls'
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
    };

    // CALL TO SALE CHART
    var chartCallToSale = function() {
        if (!document.getElementById('chartCallToSale')) {
            return;
        }

        // Main chart
        var max = Math.max(...resultsConversionsData.totals.call_to_sale.data)+10;
        var color = KTApp.getStateColor('danger');
        var ctx = document.getElementById('chartCallToSale').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = resultsConversionsData.totals.call_to_sale.data;

        var mainConfig = {
            type: 'line',
            data: {
                labels: resultsConversionsData.totals.call_to_sale.labels,
                datasets: [{
                    label: 'Call to Sale (%)',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: "#48465b",
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Call to Sale (%)'
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
    };

    // TOTAL SALES CHART
    var chartTotalSales = function() {
        if (!document.getElementById('chartTotalSales')) {
            return;
        }

        // Main chart
        var max = Math.max(...resultsConversionsData.totals.total_sales.data)+10;
        var color = KTApp.getStateColor('primary');
        var ctx = document.getElementById('chartTotalSales').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = resultsConversionsData.totals.total_sales.data;

        var mainConfig = {
            type: 'line',
            data: {
                labels: resultsConversionsData.totals.total_sales.labels,
                datasets: [{
                    label: 'Sales',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: "#48465b",
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Sales'
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
    };

    

    // TOTAL SALES VALUE CHART
    var chartTotalSalesValue = function() {
        if (!document.getElementById('chartTotalSalesValue')) {
            return;
        }

        // Main chart
        var max = Math.max(...resultsConversionsData.totals.total_sales_value.data)+10;
        var color = KTApp.getStateColor('focus');
        var ctx = document.getElementById('chartTotalSalesValue').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = resultsConversionsData.totals.total_sales_value.data;

        var mainConfig = {
            type: 'line',
            data: {
                labels: resultsConversionsData.totals.total_sales_value.labels,
                datasets: [{
                    label: 'Sales Value ($)',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: "#48465b",
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Sales Value ($)'
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
    };


    // AVERAGE SALE VALUE CHART
    var chartAverageSaleValue = function() {
        if (!document.getElementById('chartAverageSaleValue')) {
            return;
        }

        // Main chart
        var max = Math.max(...resultsConversionsData.totals.average_sale_value.data)+10;
        var color = KTApp.getStateColor('brand');
        var ctx = document.getElementById('chartAverageSaleValue').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = resultsConversionsData.totals.average_sale_value.data;

        var mainConfig = {
            type: 'line',
            data: {
                labels: resultsConversionsData.totals.average_sale_value.labels,
                datasets: [{
                    label: 'Avg. Value ($)',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: "#48465b",
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Avg. Value ($)'
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
    };


    return {
        init: function() {
            chartTotalMessages();
            chartMessageToCall();
            chartTotalCalls();
            chartCallToSale();
            chartTotalSales();
            chartTotalSalesValue();
            chartAverageSaleValue();
        }
    };
}();

// Class initialization
jQuery(document).ready(function() {
    reportsResultsConvertions.init();
});