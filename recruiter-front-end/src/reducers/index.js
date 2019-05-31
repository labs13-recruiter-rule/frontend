import {
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UNAUTHORIZED_USER
} from "../actions/index.js";

const initialState = {
  users: [],
  user: {},
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case UNAUTHORIZED_USER:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
