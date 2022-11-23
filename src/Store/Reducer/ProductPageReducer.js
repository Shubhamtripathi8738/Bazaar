import { GET_PRODUCT_PAGE,} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const productpage = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_PAGE:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};
