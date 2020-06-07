import { TRAIN_SEARCH } from "../constants/action-types";

export function searchTrain(fromstation,tostation,traveldate) {
    return function(dispatch) {
      return fetch("trains/from/"+fromstation.fromstation+"/to/"+tostation.tostation+"/date/"+traveldate.traveldate)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: TRAIN_SEARCH, payload: json });
        });
    };
  }

  
  