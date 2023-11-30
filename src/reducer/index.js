import data from "./../Data/activities";

import { FETCH_START, FETCH_SUCCESS } from "./../Actions";

const initialState = {
  activities: [],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      console.log("MADE IT TO THE FETCHSTART");
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        activities: action.payload,
        error: "",
      };

    default:
      return state;
  }
};

export default reducer;
