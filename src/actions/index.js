import { TRAIN_SEARCH } from "../constants/action-types";

export function searchTrain(fromstation,tostation) {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: TRAIN_SEARCH, payload: json });
        });
    };
  }

  

  //"http://172.17.248.33:8080/trains/from/"+fromstation.fromstation+"/to/"+tostation.tostation+"/date/2020-06-07"