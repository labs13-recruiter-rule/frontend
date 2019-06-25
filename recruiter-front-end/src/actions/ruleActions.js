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
  PARSE_RULE_START,
  PARSE_RULE_SUCCESS,
  PARSE_RULE_FAILURE,
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

export const parseRule = rule => dispatch => {
  dispatch({ type: PARSE_RULE_START });

  // const allRules = [];
  // if (rule.skills) {
  //   rule.skills.forEach(skill => {
  //     const skillRule = {
  //       operator: 'contains',
  //       value: `${skill}`,
  //       fact: 'skills',
  //     };
  //     allRules.push(skillRule);
  //   });
  // }
  // return allRules;
  return Promise.resolve(actualParser(rule))
    .then(res => {
      dispatch({ type: PARSE_RULE_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: PARSE_RULE_FAILURE, payload: err });
    });
};

export function actualParser(rule) {
  //
  const allRules = [];
  if (rule.skills) {
    rule.skills.forEach(skill => {
      const skillRule = {
        fact: 'skills',
        operator: 'contains',
        value: `${skill}`,
      };
      allRules.push(skillRule);
    });
  }
  if (rule.education) {
    const minEduRules = [];
    rule.education.forEach(edu => {
      // const eduRule = {
      //   operator: 'contains',
      //   value: `${edu}`,
      //   fact: 'education'
      // }
      // Min Edu Rule vv
      const eduRule = {
        fact: 'education',
        operator: 'contains',
        value: `${edu}`,
      };
      minEduRules.push(eduRule);
    });
    allRules.push({ any: minEduRules });
  }
  if (rule.requireHeadshot) {
    const headshotRule = {
      fact: 'hasHeadshot',
      operator: 'equal',
      value: true,
    };
    allRules.push(headshotRule);
  }
  if (rule.majors) {
    const majorRules = [];
    // if the candidate matches *any* of these majors, continue. ***not all of the majors, just one at minimum***
    rule.majors.forEach(major => {
      const majorRule = {
        fact: 'major',
        operator: 'contains',
        value: `${major}`,
      };
      majorRules.push(majorRule);
    });
    allRules.push({ any: majorRules });
  }
  if (rule.minExp) {
    const minExpRule = {
      fact: 'experience',
      operator: 'greaterThanInclusive',
      value: rule.minExp,
    };
    allRules.push(minExpRule);
  }
  if (rule.maxExp) {
    const maxExpRule = {
      fact: 'experience',
      operator: 'lessThanInclusive',
      value: rule.maxExp,
    };
    allRules.push(maxExpRule);
  }

  // !** END OF TRADITIONAL RULES \\
  // BELOW BEGINS EVENT PARAMS **1 \\

  let event = {};

  if (rule.contactEmail) {
    //
    event = { type: 'email', params: { contact: `${rule.contactEmail}` } };
  }

  const conditions = { all: allRules };
  const ruleFinal = { rule: { conditions, event } };

  return ruleFinal;
}
