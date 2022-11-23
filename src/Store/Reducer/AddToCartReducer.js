import {GET_ADD_TO_CART} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const addtocart = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_ADD_TO_CART:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
