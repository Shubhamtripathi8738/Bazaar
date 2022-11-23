import { GET_CART } from "../Action/ActionType";

const initialState = {
    loading: true,
    error: null,
  };
  
  export const getcartreducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CART: 
     
        return { ...state, productData: action.payload, loading: false };
      default:
        return state;
    }
  };
  