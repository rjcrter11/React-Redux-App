import { FETCH_START } from "../actions";

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

    default:
      return state;
  }
};
