import { GET_SIMILAR_PRODUCTS} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const similardata = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIMILAR_PRODUCTS:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};