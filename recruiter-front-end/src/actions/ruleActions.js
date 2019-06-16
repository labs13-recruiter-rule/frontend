import axios from 'axios';

// TOKEN

const token = sessionStorage.getItem('token');
const tokenHeader = {
  headers: {
    token: token,
  },
};

// GET RULES

export const GET_RULES_SUCCESS = 'GET_RULES_SUCCESS';
export const GET_RULES_FAIL = 'GET_RULES_FAIL';

export const getRules = url => dispatch => {
  return axios
    .get(`${url}`, tokenHeader)
    .then(res => {
      dispatch({
        type: GET_RULES_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_RULES_FAIL,
        payload: res.data,
      });
    });
};

// ADD RULE

// UPDATE RULE

// DELETE RULE
