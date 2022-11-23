import { GET_TRENDS_ALERT } from "../Action/ActionType";



const initialState = {
  loading: false,
  error: null,
};

export const trendsalert = (state = initialState, action) => {
  switch (action.type) {
   
    case GET_TRENDS_ALERT:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
