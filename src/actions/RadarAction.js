import axios from 'axios';

export function loadReviewData() {
    return (dispatch) => {
        return axios.get('./fetchData.json')
        .then((response) => {
            dispatch(getNewData(response.data))
            console.log(response.data);
        })
        .catch((err)=>{
            dispatch(getDataError(err))
        })
    }
}

function getNewData(data) {
    

    return {
        type: "GET_NEW_DATA",
        payload: {
            "labels": [
                "A",
                "B",
                "C",
                "D",
                "E"
            ],
            "datasets": [
                {
                    "label": "NameHere",
                    "backgroundColor": "rgba(255, 99, 132, 0.2)",
                    "borderColor": "rgb(255,99,132)",
                    "pointBackgroundColor": "rgb(255,99,132)",
                    "data": Object.values(data)
                }
            ]
        }
    }
}

function getDataError(err) {
    return {
      type: "GET_DATA_ERROR",
      payload: err
    }
  }