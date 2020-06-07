import { TRAIN_SEARCH } from "../constants/action-types";

export function searchTrain(fromstation,tostation,traveldate) {
    return function(dispatch) {
      return fetch("/from/"+fromstation.fromstation+"/to/"+tostation.tostation+"/date/"+traveldate.traveldate)
        .then(response => {console.log(response)
          return response.json()})
        .then(json => {
          dispatch({ type: TRAIN_SEARCH, payload: json });
        });
    };
  }

  
  