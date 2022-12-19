import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
  backgroundColor: ["rgba(220,38,38,0.4)",],
  labels: ['Event 1',],
  datasets: [
    {
        label: "My fist",
      data: [10,100],
      backgroundColor: ["rgba(220,38,38,0.4)",],
      hoverOffset: 4,
    },
  ],
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
    arc: {
        weight: 0.5,
        borderWidth: 3,
    },
  },
    cutout: 90,

};


export default () => (
  <div>
    <Doughnut
      data={data}
      options={options}
      width = {100}
      height = {150}



    />
  </div>
);