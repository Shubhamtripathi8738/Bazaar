import {GET_PRODUCT_LIST,} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const productlist = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};
