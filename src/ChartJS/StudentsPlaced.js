import React from 'react'
import { Line } from "react-chartjs-2";

function StudentsPlaced({chartData}) {
  return (
    <Line data={chartData} />
  )
}

export default StudentsPlaced