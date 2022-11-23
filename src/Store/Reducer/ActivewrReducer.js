import { GET_ACTIVEWEAR} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const activewear = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_ACTIVEWEAR:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
