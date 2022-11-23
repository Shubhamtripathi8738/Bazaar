import { GET_SIGN_IN} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const signindata = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIGN_IN:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};