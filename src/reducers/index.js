import { TRAIN_SEARCH } from "../constants/action-types";

const initialState = {
    trains: []    
  };
  
  function rootReducer(state = initialState, action) {

    if (action.type === TRAIN_SEARCH) {
        state = initialState
        return Object.assign({}, state, {
            trains: state.trains.concat(action.payload)
        });
      }

    return state;
  };
  
  export default rootReducer;