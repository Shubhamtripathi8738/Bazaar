import {GET_NOTIFICATION} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const notificationData = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_NOTIFICATION:
      return { ...state, notificationData: action.payload, loading: true };
    default:
      return state;
  }
};
