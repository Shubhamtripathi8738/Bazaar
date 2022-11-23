import {GET_ADD_TO_WISHLIST} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const addtowishlistreducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_ADD_TO_WISHLIST:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
