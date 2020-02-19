import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
  fetchingData: false,
  error: "",
  comic: []
};

export const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetchingData: true,
        comic: []
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        comic: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    default:
      return state;
  }
};
