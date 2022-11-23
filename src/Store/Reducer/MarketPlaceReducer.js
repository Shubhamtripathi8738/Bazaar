import {GET_MARKET_PLACE} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const marketplace = (state = initialState, action) => {
  switch (action.type) {
    case GET_MARKET_PLACE:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};
