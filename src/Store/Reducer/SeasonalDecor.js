import { GET_SEASONAL_DECOR } from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const seasonaldecor = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_SEASONAL_DECOR:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
