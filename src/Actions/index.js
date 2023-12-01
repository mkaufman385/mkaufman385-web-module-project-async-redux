import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getActivities = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get("https://www.boredapi.com/api/activity")
      .then((res) => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (activities) => {
  return { type: FETCH_SUCCESS, payload: activities };
};

export const fetchError = (error) => {
  return { type: FETCH_ERROR, payload: error };
};
