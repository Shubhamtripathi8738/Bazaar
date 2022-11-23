import { GET_CART, GET_WISH_LIST } from "../Action/ActionType";

const initialState = {
    loading: true,
    error: null,
  };
  
  export const getwishlistreducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_WISH_LIST: 
     
        return { ...state, productData: action.payload, loading: false };
      default:
        return state;
    }
  };
  