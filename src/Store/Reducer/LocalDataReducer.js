import {GET_LOCAL_DATA} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const localdata = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_LOCAL_DATA:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
