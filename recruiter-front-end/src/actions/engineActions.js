import axios from 'axios';
import {
  GET_ENGINES_FAIL,
  GET_ENGINES_SUCCESS,
  GET_ENGINE_FAIL,
  GET_ENGINE_SUCCESS,
  ADD_ENGINE_FAIL,
  ADD_ENGINE_SUCCESS,
  UPDATE_ENGINE_FAIL,
  UPDATE_ENGINE_SUCCESS,
  DELETE_ENGINE_FAIL,
  DELETE_ENGINE_SUCCESS,
} from './types';

// TOKEN

const token = sessionStorage.getItem('token');
const tokenHeader = {
  headers: {
    token,
  },
};

// GET ALL ENGINES

const engineBaseURL = 'https://recruiter-back-end.herokuapp.com/engines/';

export const getEngines = () => dispatch => {
  return axios
    .get(engineBaseURL, tokenHeader)
    .then(res => {
      dispatch({
        type: GET_ENGINES_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ENGINES_FAIL,
        payload: error,
      });
    });
};

// GET ENGINE BY ID
export const getEngine = url => dispatch => {
  return axios
    .get(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: GET_ENGINE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ENGINE_FAIL,
        payload: error,
      });
    });
};

// ADD ENGINE
export const addEngine = newEngine => dispatch => {
  return axios
    .post(engineBaseURL, newEngine, tokenHeader)
    .then(res => {
      dispatch({
        type: ADD_ENGINE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_ENGINE_FAIL,
        payload: error,
      });
    });
};

// EDIT ENGINE
export const updateEngine = (url, updatedEngine) => dispatch => {
  return axios
    .put(`${url}`, updatedEngine, tokenHeader)
    .then(res => {
      dispatch({
        type: UPDATE_ENGINE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_ENGINE_FAIL,
        payload: error,
      });
    });
};

// DELETE ENGINE
export const deleteEngine = url => dispatch => {
  return axios
    .delete(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: DELETE_ENGINE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_ENGINE_FAIL,
        payload: error,
      });
    });
};
