import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
}

export const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
  ],
  datasets: [
    {
      label: "Sales Analytics",
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(60, 76, 207, 0.2)",
      borderColor: "#3c4ccf",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#3c4ccf",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#3c4ccf",
      pointHoverBorderColor: "#fff",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80],
    },
    {
      label: "Monthly Earnings",
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(235, 239, 242, 0.2)",
      borderColor: "#c8d3db",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#c8d3db",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#c8d3db",
      pointHoverBorderColor: "#eef0f2",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36],
    },
  ],
}

const LineChart = () => {
  return <Line options={options} data={data} />
}

export default LineChart
