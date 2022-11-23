import {GET_SIGN_UP} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const signupdata = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIGN_UP:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};