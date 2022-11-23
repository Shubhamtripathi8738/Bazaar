import {GET_CARTQUANTITY } from "../Action/ActionType";

const initialState = {
    loading: true,
    error: null,
  };
  
  export const cartQuantityReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CARTQUANTITY:
        return { ...state, productData: action.payload, loading: false };
      default:
        return state;
    }
  };
  