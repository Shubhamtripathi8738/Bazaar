import {GET_USER_ADDRESS,} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const getuseraddress = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ADDRESS:
      return { ...state, userAddress: action.payload, loading: false };
    default:
      return state;
  }
};