import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/xkcd.com/${Math.floor(
        Math.random() * 2000
      )}/info.0.json`
    )
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.error("error fetching data from api", err);
      dispatch({ type: FETCH_ERROR, payload: "Error fetching data from api" });
    });
};
