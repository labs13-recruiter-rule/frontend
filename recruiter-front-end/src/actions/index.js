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

// ADD USER TO SQL DB
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL";

export const addUserToSQL = url => {
  return axios.post(`${url}`).then(res => {
    dispatch({
      type: ADD_USER_SUCCESS,
      payload: res.data
    }).catch(error => {
      dispatch({
        type: ADD_USER_FAIL,
        payload: error.response
      });
    });
  });
};

// GET USER ID FROM FIREBASE UID

export const GET_USER_ID_SUCCESS = "GET_USER_ID_SUCCESS";
export const GET_USER_ID_FAIL = "GET_USER_ID_FAIL";

export const getUserIdfromUUID = url => {
  return axios.get(`${url}`).then(res => {
    dispatch({
      type: GET_USER_ID_SUCCESS,
      payload: res.data
    }).catch(error => {
      dispatch({
        type: GET_USER_ID_FAIL,
        payload: error.response
      });
    });
  });
};
