import {GET_DELETE_ADDRESS } from "../Action/ActionType";

const initialState = {
    loading: true,
    error: null,
  };
  
  export const deleteUserAddress = (state = initialState, action) => {
    switch (action.type) {
      case GET_DELETE_ADDRESS:
        return { ...state, productData: action.payload, loading: false };
      default:
        return state;
    }
  };
  