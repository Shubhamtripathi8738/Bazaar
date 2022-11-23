import { GET_HOME_PAGE_NEW } from "../Action/ActionType";



const initialState = {
  loading: false,
  error: null,
};

export const homepagenew = (state = initialState, action) => {
  switch (action.type) {
   
    case GET_HOME_PAGE_NEW:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
