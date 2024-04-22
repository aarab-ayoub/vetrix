import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';



export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  }


const data = {
    labels: [
        "Desktops",
        "Tablets"
    ],
    datasets: [
        {
            data: [300, 180],
            backgroundColor: [
                "#02a499",
                "#ebeff2"
            ],
            hoverBackgroundColor: [
                "#02a499",
                "#ebeff2"
            ],
            hoverBorderColor: "#fff"
        }]
};


const PieChart = () =>{
       
        return (
            <React.Fragment>
                <Pie width={600} height={215} data={data} options={options}  />
            </React.Fragment>
        );
    }


export default PieChart;   


