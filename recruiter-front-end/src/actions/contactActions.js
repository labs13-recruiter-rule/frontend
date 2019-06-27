import axios from 'axios';
import {
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
} from './types';

// TOKEN
const token = sessionStorage.getItem('token');
const tokenHeaderRedux = {
  headers: {
    token,
  },
};

// GET ALL CONTACTS
export const getContacts = () => dispatch => {
  return axios
    .get('https://recruiter-back-end.herokuapp.com/contacts/', tokenHeaderRedux)
    .then(res => {
      // console.log('from resdata', res.data);
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: error,
      });
    });
};

// GET INDIVIDUAL CONTACT

export const getContact = () => dispatch => {
  return axios
    .get('https://recruiter-back-end.herokuapp.com/contacts/', tokenHeaderRedux)
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

export const addContact = contact => dispatch => {
  return axios
    .post(
      'https://recruiter-back-end.herokuapp.com/contacts/',
      contact,
      tokenHeaderRedux,
    )
    .then(res => {
      console.log('addContact res', res);
      dispatch({
        type: ADD_CONTACT_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_CONTACT_FAIL,
        payload: error,
      });
    });
};

// UPDATE CONTACT

export const updateContact = (contact_id, updatedContact) => dispatch => {
  return axios
    .put(
      `https://recruiter-back-end.herokuapp.com/contacts/${contact_id}`,
      updatedContact,
      tokenHeaderRedux,
    )
    .then(res => {
      console.log('from res update contact', res);
      dispatch({
        type: UPDATE_CONTACT_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_CONTACT_FAIL,
        payload: error,
      });
    });
};

// DELETE CONTACT

export const deleteContact = contact_id => dispatch => {
  return axios
    .delete(
      `https://recruiter-back-end.herokuapp.com/contacts/${contact_id}`,
      tokenHeaderRedux,
    )
    .then(res => {
      console.log('del success', res);
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_CONTACT_FAIL,
        payload: error,
      });
    });
};
