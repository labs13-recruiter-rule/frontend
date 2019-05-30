import {
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UNAUTHORIZED_USER
} from "../actions";

const initialState = {
  users: [],
  user: {},
  error: null,
  errorStatusCode: null
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
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };
    case UNAUTHORIZED_USER:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };
    default:
      return state;
  }
};

export default reducer;
