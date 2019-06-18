import {
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_ID_FAIL,
  GET_USER_ID_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
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
  CREATE_GROUP_FAIL,
  CREATE_GROUP_SUCCESS,
  EDIT_GROUP_FAIL,
  EDIT_GROUP_SUCCESS,
  DELETE_GROUP_FAIL,
  DELETE_GROUP_SUCCESS,
  GET_GROUP_FAIL,
  GET_GROUP_SUCCESS,
  ADD_CONTACT_TO_GROUP_FAIL,
  ADD_CONTACT_TO_GROUP_SUCCESS,
  REMOVE_CONTACT_FROM_GROUP_FAIL,
  REMOVE_CONTACT_FROM_GROUP_SUCCESS,
  EDIT_CONTACT_IN_GROUP_FAIL,
  EDIT_CONTACT_IN_GROUP_SUCCESS,
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
} from '../actions';

const initialState = {
  users: [],
  user: {},
  error: null,
  contact: {},
  contacts: [],
  groupContacts: [],
  groupContact: {},
  engine: {},
  engines: [],
  rule: {},
  rules: [],
  email_history: [],
  email_total: null,
  email_total_candidate: null,
  email_total_contact: null,
  addressee_type: '',
  group: {},
  groups: [],
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_USER_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_USER_ID_SUCCESS:
      return {
        ...state,
        user_id: action.payload,
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
      };
    case GET_CONTACTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload,
      };
    case GET_CONTACT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload,
      };
    case ADD_CONTACT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_CONTACT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case DELETE_CONTACT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_GROUP_SUCCESS:
      return {
        ...state,
        group: action.payload,
      };
    case CREATE_GROUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_GROUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_GROUP_SUCCESS:
      return {
        ...state,
        group: action.payload,
      };
    case DELETE_GROUP_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case DELETE_GROUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_GROUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_GROUP_SUCCESS:
      return {
        ...state,
        group: action.payload,
      };
    case ADD_CONTACT_TO_GROUP_SUCCESS:
      return {
        ...state,
        groupContact: action.payload,
      };
    case ADD_CONTACT_TO_GROUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_CONTACT_FROM_GROUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_CONTACT_FROM_GROUP_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case EDIT_CONTACT_IN_GROUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_CONTACT_IN_GROUP_SUCCESS:
      return {
        ...state,
        groupContact: action.payload,
      };
    case GET_RULES_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_RULES_SUCCESS:
      return {
        ...state,
        rules: action.payload,
      };
    case GET_RULE_SUCCESS:
      return {
        ...state,
        rule: action.payload,
      };
    case GET_RULE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_RULE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_RULE_SUCCESS:
      return {
        ...state,
        rule: action.payload,
      };
    case UPDATE_RULE_SUCCESS:
      return {
        ...state,
        rule: action.payload,
      };
    case UPDATE_RULE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_RULE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_RULE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case GET_ENGINES_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ENGINES_SUCCESS:
      return {
        ...state,
        engines: action.payload,
      };
    case GET_ENGINE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ENGINE_SUCCESS:
      return {
        ...state,
        engine: action.payload,
      };
    case ADD_ENGINE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_ENGINE_SUCCESS:
      return {
        ...state,
        engine: action.payload,
      };
    case UPDATE_ENGINE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_ENGINE_SUCCESS:
      return {
        ...state,
        engine: action.payload,
      };
    case DELETE_ENGINE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_ENGINE_SUCCESS:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_EMAIL_HISTORY_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_EMAIL_HISTORY_SUCCESS:
      return {
        ...state,
        email_history: action.payload,
      };
    case GET_EMAIL_HISTORY_SUCCESS:
      return {
        ...state,
        email_history: action.payload,
      };
    case GET_EMAIL_HISTORY_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_EMAIL_TOTAL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_EMAIL_TOTAL_SUCCESS:
      return {
        ...state,
        email_total: action.payload,
      };
    case GET_EMAILS_BY_CANDIDATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_EMAILS_BY_CANDIDATE_SUCCESS:
      return {
        ...state,
        email_total_candidate: action.payload,
      };
    case GET_EMAILS_BY_CONTACT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_EMAILS_BY_CONTACT_SUCCESS:
      return {
        ...state,
        email_total_contact: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
