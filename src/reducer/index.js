import data from "./../Data/activities";

import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./../Actions";

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
      console.log("MADE IT TO THE FETCHSUCCESS");
      return {
        ...state,
        loading: false,
        activities: action.payload,
        error: "",
      };
    case FETCH_ERROR:
      console.log("MADE IT TO THE FETCHERROR");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
