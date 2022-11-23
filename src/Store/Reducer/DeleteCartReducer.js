import {GET_DELETE_CART,} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const deletecart = (state = initialState, action) => {
  switch (action.type) {
    case GET_DELETE_CART:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};
