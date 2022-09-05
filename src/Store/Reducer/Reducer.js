import { GET_CATEGORY } from "../Action/ActionType";


const initialState = {
  loading: false,
  error: null,
};

export const category = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
