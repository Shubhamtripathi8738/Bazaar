import { GET_BRANDS,} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const brands = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANDS:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};
