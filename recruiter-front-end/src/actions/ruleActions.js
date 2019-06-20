import axios from 'axios';
import {
  GET_RULES_FAIL,
  GET_RULES_SUCCESS,
  GET_RULE_SUCCESS,
  GET_RULE_FAIL,
  ADD_RULE_SUCCESS,
  ADD_RULE_FAIL,
  UPDATE_RULE_SUCCESS,
  UPDATE_RULE_FAIL,
  DELETE_RULE_SUCCESS,
  DELETE_RULE_FAIL,
} from './types';
// TOKEN

const token = sessionStorage.getItem('token');
const tokenHeader = {
  headers: {
    token,
  },
};

// GET RULES

// https://recruiter-back-end.herokuapp.com/engines/1/rules

const engineURL = 'https://recruiter-back-end.herokuapp.com/engines/';

export const getRules = id => dispatch => {
  return axios
    .get(`${engineURL}` + `${id}` + `/rules/`, tokenHeader)
    .then(res => {
      dispatch({
        type: GET_RULES_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_RULES_FAIL,
        payload: error,
      });
    });
};

// GET RULE BY ID
export const getRule = url => dispatch => {
  return axios
    .get(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: GET_RULE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_RULE_FAIL,
        payload: error,
      });
    });
};

// ADD RULE
export const addRule = (url, newRule) => dispatch => {
  return axios
    .post(`${url}`, newRule, tokenHeader)
    .then(res => {
      dispatch({
        type: ADD_RULE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_RULE_FAIL,
        payload: error,
      });
    });
};

// UPDATE RULE

export const updateRule = (url, updatedRule) => dispatch => {
  return axios
    .put(`${url}`, updatedRule, tokenHeader)
    .then(res => {
      dispatch({
        type: UPDATE_RULE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_RULE_FAIL,
        payload: error,
      });
    });
};

// DELETE RULE
export const deleteRule = (engineid, ruleid) => dispatch => {
  return axios
    .delete(
      `${engineURL}` + `${engineid}` + `/rules/` + `${ruleid}`,
      tokenHeader,
    )
    .then(res => {
      console.log('from delete res action', res);
      dispatch({
        type: DELETE_RULE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_RULE_FAIL,
        payload: error,
      });
    });
};
