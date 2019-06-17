import axios from 'axios';
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
} from './types';

import { getUsers, addUserToSQL, getUserIdfromUUID } from './userActions';
import {
  getContact,
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactActions';

// import { history } from "../helpers/history";

export {
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_ID_FAIL,
  GET_USER_ID_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  getUsers,
  addUserToSQL,
  getUserIdfromUUID,
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
  getContact,
  getContacts,
  addContact,
  deleteContact,
  updateContact,
};
