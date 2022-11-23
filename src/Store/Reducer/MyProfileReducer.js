import {GET_MY_PROFILE_DATA} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const myProfile = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE_DATA:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};
