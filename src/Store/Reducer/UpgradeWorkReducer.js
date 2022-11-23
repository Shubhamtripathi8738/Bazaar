import { GET_UPGRADE_WORK } from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const upgradework = (state = initialState, action) => {
  switch (action.type) {
   
    case GET_UPGRADE_WORK:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
