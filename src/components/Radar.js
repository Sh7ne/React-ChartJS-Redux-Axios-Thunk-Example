import React from 'react';
import {Radar} from 'react-chartjs-2';

const options = {
    legend: {
        display: false
    },
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
        display: false
      }
    },
    tooltips:{
      enabled:true
    }
};

// const test = {
//   labels: ["A", "B", "C", "D", "E"],
//   datasets: [{
//       label: "NameHere",
//       backgroundColor: Chart.helpers.color('rgb(255, 99, 132)').alpha(0.2).rgbString(),
//       borderColor: 'rgb(255, 99, 132)',
//       pointBackgroundColor: 'rgb(255, 99, 132)',
//       data: [4.0,3.5,3.9,4.3,3.6]
//   }]
// }

 
class RadarDiagram extends React.Component{
    render(){
        return (
            <Radar data={this.props.data} options={options} />
        );
    }
}

export default RadarDiagram;