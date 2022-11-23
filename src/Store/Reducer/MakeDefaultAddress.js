import {GET_DEFAULT_ADDRESS} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const makeDefaultAddress = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_DEFAULT_ADDRESS:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
