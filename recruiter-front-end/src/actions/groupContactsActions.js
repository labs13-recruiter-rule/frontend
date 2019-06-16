import axios from 'axios';

// TOKEN

const token = sessionStorage.getItem('token');
const tokenHeader = {
  headers: {
    token: token,
  },
};

// ADD CONTACT TO CONTACT GROUP
export const ADD_CONTACT_TO_GROUP_SUCCESS = 'ADD_CONTACT_TO_GROUP_SUCCESS';
export const ADD_CONTACT_TO_GROUP_FAIL = 'ADD_CONTACT_TO_GROUP_FAIL';

export const addContactToGroup = (url, newGroupContact) => dispatch => {
  return axios
    .post(`${url}`, newGroupContact, tokenHeader)
    .then(res => {
      dispatch({
        type: ADD_CONTACT_TO_GROUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_CONTACT_TO_GROUP_FAIL,
        payload: error,
      });
    });
};

// REMOVE CONTACT FROM CONTACT GROUP
export const REMOVE_CONTACT_FROM_GROUP_SUCCESS =
  'REMOVE_CONTACT_FROM_GROUP_SUCCESS';
export const REMOVE_CONTACT_FROM_GROUP_FAIL = 'REMOVE_CONTACT_FROM_GROUP_FAIL';

export const removeContactfromGroup = url => {
  return axios
    .delete(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: REMOVE_CONTACT_FROM_GROUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: REMOVE_CONTACT_FROM_GROUP_FAIL,
        payload: error,
      });
    });
};

// EDIT CONTACT IN CONTACT GROUP
export const EDIT_CONTACT_IN_GROUP_SUCCESS = 'EDIT_CONTACT_IN_GROUP_SUCCESS';
export const EDIT_CONTACT_IN_GROUP_FAIL = 'EDIT_CONTACT_IN_GROUP_FAIL';

export const editContactInGroup = (url, editedGroupContact) => dispatch => {
  return axios
    .put(`${url}`, editedGroupContact, tokenHeader)
    .then(res => {
      dispatch({
        type: EDIT_CONTACT_IN_GROUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: EDIT_CONTACT_IN_GROUP_FAIL,
        payload: error,
      });
    });
};
