import axios from 'axios';
import {
  ADD_CONTACT_TO_GROUP_FAIL,
  ADD_CONTACT_TO_GROUP_SUCCESS,
  REMOVE_CONTACT_FROM_GROUP_FAIL,
  REMOVE_CONTACT_FROM_GROUP_SUCCESS,
  EDIT_CONTACT_IN_GROUP_FAIL,
  EDIT_CONTACT_IN_GROUP_SUCCESS,
  GET_GROUPCONTACTS_BY_GROUP_SUCCESS,
  GET_GROUPCONTACTS_BY_GROUP_FAIL,
  GET_GROUPCONTACTS_SUCCESS,
  GET_GROUPCONTACTS_FAIL,
} from './types';

// TOKEN

const token = sessionStorage.getItem('token');
const tokenHeaderRedux = {
  headers: {
    token: token,
  },
};

// ADD CONTACT TO CONTACT GROUP
// expects group_id and contact_id

export const addContactToGroup = newGroupContact => dispatch => {
  return axios
    .post(
      `https://recruiter-back-end.herokuapp.com/groupcontacts/`,
      newGroupContact,
      tokenHeaderRedux,
    )
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

export const removeContactfromGroup = groupcontact_id => dispatch => {
  return axios
    .delete(
      `https://recruiter-back-end.herokuapp.com/groupcontacts/${groupcontact_id}`,
      tokenHeaderRedux,
    )
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

export const editContactInGroup = (
  groupcontact_id,
  editedGroupContact,
) => dispatch => {
  return axios
    .put(
      `https://recruiter-back-end.herokuapp.com/groupcontacts/${groupcontact_id}`,
      editedGroupContact,
      tokenHeaderRedux,
    )
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

// GET CONTACTS IN GROUP BY GROUP_ID

export const getGroupContactsByGroupId = group_id => dispatch => {
  axios
    .get(
      `https://recruiter-back-end.herokuapp.com/groupcontacts/group/${group_id}`,
      tokenHeaderRedux,
    )
    .then(res =>
      dispatch({
        type: GET_GROUPCONTACTS_BY_GROUP_SUCCESS,
        payload: res.data,
      }),
    )
    .catch(error => {
      dispatch({
        type: GET_GROUPCONTACTS_BY_GROUP_FAIL,
        payload: error,
      });
    });
};

export const getGroupContacts = () => dispatch => {
  axios
    .get('https://recruiter-back-end.herokuapp.com/groupcontacts', tokenHeaderRedux)
    .then(res => {
      dispatch({
        type: GET_GROUPCONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_GROUPCONTACTS_FAIL,
        payload: error,
      });
    });
};
