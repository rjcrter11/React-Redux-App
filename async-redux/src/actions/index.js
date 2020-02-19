import axios from "axios";

export const FETCH_START = "FETCH_START";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("https://cors-anywhere.herokuapp.com/xkcd.com/info.0.json")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
