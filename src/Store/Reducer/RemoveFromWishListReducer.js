import {REMOVE_FROM_WISHLIST} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const removefromwishlist = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_WISHLIST:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};
