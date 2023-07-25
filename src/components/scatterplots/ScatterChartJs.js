import thousandpoints from '../../data/1kpoints.json'

import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Scatter } from 'react-chartjs-2'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

export const data = {
  datasets: [
    {
      label: 'A dataset',
      data: thousandpoints,
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
}

export default function ScatterChartJs() {
  return <Scatter options={options} data={data} />
}
