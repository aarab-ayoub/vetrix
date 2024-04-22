import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class DountChart extends Component {
    render() {
        const data = {
            labels: [
                "Desktops",
                "Tablets"
            ],
            datasets: [
                {
                    data: [300, 210],
                    backgroundColor: [
                        "#3c4ccf",
                        "#ebeff2"
                    ],
                    hoverBackgroundColor: [
                        "#3c4ccf",
                        "#ebeff2"
                    ],
                    hoverBorderColor: "#fff"
                }]
        };


        return (
            <React.Fragment>
                <Doughnut width={600} height={215} data={data}  />
            </React.Fragment>
        );
    }
}

export default DountChart;