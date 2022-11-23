import {GET_SELLER_PRODUCTS} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const sellerproducts = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELLER_PRODUCTS:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};
