import {GET_KITCHEN_AND_DINING} from "../Action/ActionType";


const initialState = {
  loading: true,
  error: null,
};

export const kitchenanddining = (state = initialState, action) => {
  switch (action.type) {
    case GET_KITCHEN_AND_DINING:
      return { ...state, productData: action.payload, loading: false };
    default:
      return state;
  }
};
