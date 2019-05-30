import axios from "axios";

import { history } from "../helpers/history";

// ERRORS
export const UNAUTHORIZED_USER = "UNAUTHORIZED_USER";

// GET USERS

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export const getUsers = () => dispatch => {
  axios
    .get("https://recruiter-back-end.herokuapp.com/users")
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      if (error.response.status === 403) {
        dispatch({
          type: UNAUTHORIZED_USER,
          payload: error.response
        });
      } else {
        dispatch({
          type: GET_USERS_FAIL,
          payload: error.response
        });
      }
    });
};

// GET USER BY ID
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const getUserById = () => dispatch => {
  axios
    .get(`https://recruiter-back-end.herokuapp.com/users/${id}`)
    .then(res => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      if (error.response.status === 403) {
        dispatch({
          type: UNAUTHORIZED_USER,
          payload: error.response
        });
      } else {
        dispatch({
          type: GET_USER_FAIL,
          payload: error.response
        });
      }
    });
};
