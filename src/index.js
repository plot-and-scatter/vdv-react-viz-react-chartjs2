import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ScatterChartJs from './components/scatterplots/ScatterChartJs'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ScatterChartJs />
  </React.StrictMode>
)
