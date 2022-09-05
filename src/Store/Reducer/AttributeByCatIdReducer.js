import { GET_ATTRIBUTE_BY_CATID } from "../Action/ActionType";

const initialState={
    loading:false,
    error:null
}
export const attributeByCatId = (state = initialState, action) => {
    switch (action.type) {
      case GET_ATTRIBUTE_BY_CATID:
        return { ...state, productData: action.payload, loading: true };
      default:
        return state;
    }
  };
  