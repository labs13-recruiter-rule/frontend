import axios from 'axios';

// import { history } from "../helpers/history";

// ERRORS
export const UNAUTHORIZED_USER = 'UNAUTHORIZED_USER';

// GET USERS

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const getUsers = url => dispatch => {
  return axios
    .get(`${url}`)
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data,
      });
      console.log('from res', res.data);
      console.log('from env', process.env.REACT_APP);
    })
    .catch(error => {
      dispatch({
        type: GET_USERS_FAIL,
        payload: error,
      });
    });
};

// GET USER BY ID
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

// ADD USER TO SQL DB
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';

export const addUserToSQL = (url, user) => dispatch => {
  return axios
    .post(`${url}`, user)
    .then(res => {
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_USER_FAIL,
        payload: error,
      });
    });
};

// GET USER ID FROM FIREBASE UID

export const GET_USER_ID_SUCCESS = 'GET_USER_ID_SUCCESS';
export const GET_USER_ID_FAIL = 'GET_USER_ID_FAIL';

export const getUserIdfromUUID = (url, uuid) => dispatch => {
  return axios
    .get(`${url}/fbid/${uuid}`)
    .then(res => {
      dispatch({
        type: GET_USER_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_USER_ID_FAIL,
        payload: error,
      });
    });
};

// GET CONTACTS
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAIL = 'GET_CONTACTS_FAIL';

export const getContacts = url => dispatch => {
  return axios
    .get(`${url}`)
    .then(res =>
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      }),
    )
    .catch(error => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: error,
      });
    });
};

// GET INDIVIDUAL CONTACT
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS';
export const GET_CONTACT_FAIL = 'GET_CONTACT_FAIL';

export const getContact = url => dispatch => {
  return axios
    .get(`${url}`)
    .then(res =>
      dispatch({
        type: GET_CONTACT_SUCCESS,
        payload: res.data,
      }),
    )
    .catch(error => {
      dispatch({
        type: GET_CONTACT_FAIL,
        payload: error,
      });
    });
};

// ADD CONTACT
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const ADD_CONTACT_FAIL = 'ADD_CONTACT_FAIL';

export const addContact = url => dispatch => {
  return axios.post(`${url}`);
};

// UPDATE CONTACT
export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
export const UPDATE_CONTACT_FAIL = 'UPDATE_CONTACT_FAIL';

// DELETE CONTACT
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAIL = 'DELETE_CONTACT_FAIL';

// CREATE CONTACT GROUP
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_FAIL = 'CREATE_GROUP_FAIL';

// EDIT CONTACT GROUP
export const EDIT_GROUP_SUCCESS = 'EDIT_GROUP_SUCCESS';
export const EDIT_GROUP_FAIL = 'EDIT_GROUP_FAIL';

// DELETE CONTACT GROUP
export const DELETE_GROUP_SUCCESS = 'DELETE_GROUP_SUCCESS';
export const DELETE_GROUP_FAIL = 'DELETE_GROUP_FAIL';

// GET CONTACT GROUP
export const GET_GROUP_SUCCESS = 'GET_GROUP_SUCCESS';
export const GET_GROUP_FAIL = 'GET_GROUP_FAIL';

// ADD CONTACT TO CONTACT GROUP
export const ADD_CONTACT_TO_GROUP_SUCCESS = 'ADD_CONTACT_TO_GROUP_SUCCESS';
export const ADD_CONTACT_TO_GROUP_FAIL = 'ADD_CONTACT_TO_GROUP_FAIL';

// REMOVE CONTACT FROM CONTACT GROUP
export const REMOVE_CONTACT_FROM_GROUP_SUCCESS =
  'REMOVE_CONTACT_FROM_GROUP_SUCCESS';
export const REMOVE_CONTACT_FROM_GROUP_FAIL = 'REMOVE_CONTACT_FROM_GROUP_FAIL';

// EDIT CONTACT IN CONTACT GROUP
export const EDIT_CONTACT_IN_GROUP_SUCCESS = 'EDIT_CONTACT_IN_GROUP_SUCCESS';
export const EDIT_CONTACT_IN_GROUP_FAIL = 'EDIT_CONTACT_IN_GROUP_FAIL';
