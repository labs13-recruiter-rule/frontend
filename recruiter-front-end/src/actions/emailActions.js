import axios from 'axios';
import {
  ADD_EMAIL_HISTORY_SUCCESS,
  ADD_EMAIL_HISTORY_FAIL,
  GET_EMAIL_HISTORY_SUCCESS,
  GET_EMAIL_HISTORY_FAIL,
  GET_EMAIL_TOTAL_SUCCESS,
  GET_EMAIL_TOTAL_FAIL,
  GET_EMAILS_BY_CANDIDATE_FAIL,
  GET_EMAILS_BY_CANDIDATE_SUCCESS,
  GET_EMAILS_BY_CONTACT_FAIL,
  GET_EMAILS_BY_CONTACT_SUCCESS,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL,
} from './types';
import { CommentAction } from 'semantic-ui-react';
// TOKEN

const token = sessionStorage.getItem('token');
const tokenHeader = {
  headers: {
    token: token,
  },
};

// GET EMAIL HISTORY
export const getEmailHistory = url => dispatch => {
  axios
    .get(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: GET_EMAIL_HISTORY_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_EMAIL_HISTORY_FAIL,
        payload: error,
      });
    });
};

// ADD EMAIL HISTORY
export const addEmailHistory = (url, newEmail) => dispatch => {
  axios
    .post(`${url}`, newEmail, tokenHeader)
    .then(res => {
      dispatch({
        type: ADD_EMAIL_HISTORY_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_EMAIL_HISTORY_FAIL,
        payload: error,
      });
    });
};
// COUNTS
export const getEmailTotal = url => dispatch => {
  axios
    .get(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: GET_EMAIL_TOTAL_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_EMAIL_TOTAL_FAIL,
        payload: error,
      });
    });
};

export const getEmailHistoryAboutCandidate = url => dispatch => {
  axios
    .get(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: GET_EMAILS_BY_CANDIDATE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_EMAILS_BY_CANDIDATE_FAIL,
        payload: error,
      });
    });
};

export const getEmailHistoryToContact = url => dispatch => {
  axios
    .get(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: GET_EMAILS_BY_CONTACT_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_EMAILS_BY_CONTACT_FAIL,
        payload: error,
      });
    });
};

// SEND EMAIL
/// NEED TO FIGURE OUT THIS ONE
