import { GET_BANNER } from "../Action/ActionType";

const initialState = {
    loading: true,
    error: null,
  };
  
  export const banner = (state = initialState, action) => {
    switch (action.type) {
      case GET_BANNER:
        return { ...state, productData: action.payload, loading: false };
      default:
        return state;
    }
  };
  