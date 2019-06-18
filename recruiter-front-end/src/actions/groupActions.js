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
  GET_ALL_GROUPS_FAIL,
  GET_ALL_GROUPS_SUCCESS
} from './types';
import { CommentAction } from 'semantic-ui-react';
// TOKEN

const token = sessionStorage.getItem('token');
const tokenHeader = {
  headers: {
    token: token,
  },
};

// CREATE CONTACT GROUP

export const createGroup = newGroup => dispatch => {
  return axios
    .post(
      `https://recruiter-back-end.herokuapp.com/groups/`,
      newGroup,
      tokenHeader,
    )
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

export const editGroup = (group_id, editedGroup) => dispatch => {
  return axios
    .put(
      `https://recruiter-back-end.herokuapp.com/groups/${group_id}`,
      editedGroup,
      tokenHeader,
    )
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

export const deleteGroup = group_id => dispatch => {
  return axios
    .delete(
      `https://recruiter-back-end.herokuapp.com/groups/${group_id}`,
      tokenHeader,
    )
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

// GET CONTACT GROUP BY ID

export const getGroup = group_id => dispatch => {
  return axios
    .get(
      `https://recruiter-back-end.herokuapp.com/groups/${group_id}`,
      tokenHeader,
    )
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

export const getGroups = () => dispatch => {
    return axios.get(`https://recruiter-back-end.herokuapp.com/groups/`, tokenHeader)
    .then(res => 
        dispatch({
            type: GET_ALL_GROUPS_SUCCESS,
            payload: res.data
        }))
    .catch(error => {
        dispatch({
            type: GET_ALL_GROUPS_FAIL,
            payload: error
        })
    })
}