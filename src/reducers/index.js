import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions/index";

const initialState = {
  picture: "https://coffee.alexflipnote.dev/QfcVNLrIqds_coffee.jpg",
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        picture: {},
        isFetching: false,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        picture: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        picture: {},
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
