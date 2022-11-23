import {GET_COUNTRY_LIST} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const countrylist = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_LIST:
      return { ...state, countryData: action.payload, loading: false };
    default:
      return state;
  }
};
