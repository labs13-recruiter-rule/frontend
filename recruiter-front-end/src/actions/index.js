import axios from "axios";

import { history } from "../helpers/history";

// ERRORS
export const UNAUTHORIZED_USER = "UNAUTHORIZED_USER";

// GET USERS

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export const getUsers = url => dispatch => {
  return axios
    .get(`${url}`)
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data
      });
      console.log("from res", res.data);
      console.log("from env", process.env.REACT_APP);
    })
    .catch(error => {
      dispatch({
        type: GET_USERS_FAIL,
        payload: error.response
      });
    });
};

// GET USER BY ID
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";
