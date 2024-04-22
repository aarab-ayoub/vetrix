import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class ProfileChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: false,
                    },
                },
                colors: ['#556ee6', '#34c38f'],
                plotOptions: {
                    bar: {
                        borderRadius: 5,
                        columnWidth: '28%',
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    },
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ["#BED1EF"]
                    }
                },
                grid: {
                    borderColor: '#f8f8fa',
                    row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                stroke: {
                    show: true,
                    width: 1.5,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    position: 'top',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#D8E3F0',
                                colorTo: '#BED1E6',
                                stops: [0, 100],
                                opacityFrom: 0.8,
                                opacityTo: 0.5,
                            }
                        }
                    },

                    tooltip: {
                        enabled: true,
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }

                },
            },
            series: [{
                name: 'Inflation',
                data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
            }],
        }
    }
    render() {
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" className="apex-charts" />
            </React.Fragment>
        );
    }
}

export default ProfileChart;