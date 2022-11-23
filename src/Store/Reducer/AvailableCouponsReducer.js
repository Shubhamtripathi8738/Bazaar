import {GET_AVAILABLE_COUPONS } from "../Action/ActionType";

const initialState={
    loading:false,
    error:null
}
export const availableCoupons = (state = initialState, action) => {
    switch (action.type) {
      case GET_AVAILABLE_COUPONS:
        return { ...state, couponData: action.payload, loading: true };
      default:
        return state;
    }
  };