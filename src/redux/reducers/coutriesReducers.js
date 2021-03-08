import {
  DATA_FETCHING,
  DATA_FETCHING_ERROR,
  DATA_FETCHING_SUCCESS,
  SHOW_COUNTRIES_DATA,
} from "../actions/countriesActions";

const initialState = {
  loading: false,
  countries: [],
  error: "",
};

const countriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case DATA_FETCHING_SUCCESS:
      return {
        loading: false,
        countries: action.payload,
        error: "",
      };
    case SHOW_COUNTRIES_DATA:
      return {
        loading: false,
        countries: action.payload,
        error: "",
      };
    case DATA_FETCHING_ERROR:
      return {
        loading: false,
        countries: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducers;
