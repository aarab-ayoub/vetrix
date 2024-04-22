import React from "react"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"
import { Radar } from "react-chartjs-2"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export const data = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "Desktops",
      data: [65, 59, 90, 81, 56, 55, 40],
      backgroundColor: "rgba(2, 164, 153, 0.2)",
      borderColor: "#02a499",
      pointBackgroundColor: "#02a499",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#02a499",
      borderWidth: 1,
    },
    {
      label: "Tablets",
      backgroundColor: "rgba(60, 76, 207, 0.2)",
      borderColor: "#3c4ccf",
      pointBackgroundColor: "#3c4ccf",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#3c4ccf",
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
}

const RadarChart = () => {
  return <Radar data={data} />
}

export default RadarChart
