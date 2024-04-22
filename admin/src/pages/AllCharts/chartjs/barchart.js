import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales Analytics",
      backgroundColor: "#02a499",
      borderColor: "#02a499",
      borderWidth: 1,
      hoverBackgroundColor: "#02a499",
      hoverBorderColor: "#02a499",
      data: [65, 59, 81, 45, 56, 80, 50, 20],
    },
  ],
}

const BarChart = () => {
  return <Bar width={600} height={245} options={options} data={data} />
}

export default BarChart
