import {GET_SELLER_DATA} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const sellerdata = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELLER_DATA:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};
