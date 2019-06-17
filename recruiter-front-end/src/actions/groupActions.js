import axios from 'axios';
import {
  CREATE_GROUP_FAIL,
  CREATE_GROUP_SUCCESS,
  EDIT_GROUP_FAIL,
  EDIT_GROUP_SUCCESS,
  DELETE_GROUP_FAIL,
  DELETE_GROUP_SUCCESS,
  GET_GROUP_FAIL,
  GET_GROUP_SUCCESS,
} from './types';
// TOKEN

const token = sessionStorage.getItem('token');
const tokenHeader = {
  headers: {
    token: token,
  },
};

// CREATE CONTACT GROUP

export const createGroup = (url, newGroup) => dispatch => {
  return axios
    .post(`${url}`, newGroup, tokenHeader)
    .then(res => {
      dispatch({
        type: CREATE_GROUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: CREATE_GROUP_FAIL,
        payload: error,
      });
    });
};

// EDIT CONTACT GROUP

export const editGroup = (url, editedGroup) => dispatch => {
  return axios
    .put(`${url}`, editedGroup, tokenHeader)
    .then(res => {
      dispatch({
        type: EDIT_GROUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: EDIT_GROUP_FAIL,
        payload: error,
      });
    });
};

// DELETE CONTACT GROUP

export const deleteGroup = url => dispatch => {
  return axios
    .delete(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: DELETE_GROUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_GROUP_FAIL,
        payload: error,
      });
    });
};

// GET CONTACT GROUP

export const getGroup = url => dispatch => {
  return axios
    .get(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: GET_GROUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_GROUP_FAIL,
        payload: error,
      });
    });
};
