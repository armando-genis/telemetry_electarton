import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const options = {
  plugins: {
    legend: {
      display:false,
    },
      maintainAspectRatio: false,
      responsive: true,
  },
  elements:{
    line: {
      tension: 0.3,
      borderWitdh: 2,
      borderColor: "rgba(220,38,38,1)",
      fill: "start",
      backgroundColor: "rgba(220,38,38,0.4)",
    },
    point: {
      radius:3,
      hitRadius: 10,
      hoverRadius: 5,
      backgroundColor: "rgba(220,38,38,0.4)",
      borderWidth: 1,
      hoverBorderWidth: 2,
      hoverBorderColor: 'rgba(220,220,220,1)',
      hoverBackgroundColor: 'rgba(220,38,38,1)',
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },

};

export default () => (
  <div>
    <Line
      data={data}
      options={options}
      width = {100}
      height = {150}



    />
  </div>
);