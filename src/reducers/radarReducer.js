import React from 'react';
import {Chart, Radar} from 'react-chartjs-2';

const chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
  };

const color = Chart.helpers.color;

let defaultState = {
    chartData: {
        labels: ["A", "B", "C", "D", "E"],
        datasets: [{
            label: "NameHere",
            backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
            borderColor: chartColors.red,
            pointBackgroundColor: chartColors.red,
            data: [5,5,5,5,5]
        }]
    }
}

const radarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_NEW_DATA": {
            return {
                ...state,
                data: action.payload,
                isLoaded: true
            }
            break;
        }
        case "GET_DATA_ERROR": {
            return {
                ...state,
                data: defaultState.payload,
                isLoaded: false
            }
            break;
        }
    }
}

export default radarReducer;