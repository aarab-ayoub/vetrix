
import React from "react"
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"
import { PolarArea } from "react-chartjs-2"

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export const data = {
  labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
  datasets: [
    {
      label: "My dataset",
      hoverBorderColor: "#fff",
      data: [11, 16, 7, 18],
      backgroundColor: ["#38a4f8", "#02a499", "#ec4561", "#3c4ccf"],
      borderWidth: 1,
    },
  ],
}

export default function PolarChart() {
  return (
    <React.Fragment>
      <PolarArea data={data} />
    </React.Fragment>
  )
}
