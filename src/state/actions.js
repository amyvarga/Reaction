import {
  NEW_MESSAGE,
  SET_USERNAME,
  SET_ERROR_MESSAGES,
  SET_FORM_CONTROL_VALUE,
  SET_FORM_CONTROL_ERROR_MESSAGE
} from './types';
import uuid from 'uuid';

export const newMessage = (text, username) => ({
  type: NEW_MESSAGE,
  item: { id: uuid(), text, timestamp: Date.now(), username },
});

export const setUsername = username => ({
  type: SET_USERNAME,
  username
});

export const setErrorMessages = ({ errorId, errorMessage }) => ({
  type: SET_ERROR_MESSAGES,
  item: { errorId, errorMessage }
});

export const createReaction = ({ type, emoji, username, messageId }) => ({
  type,
  item: { id: uuid(), timestamp: Date.now(), emoji, username, messageId }
});

export const setFormControlValue = ({ formId, controlId, value }) => ({
  type: SET_FORM_CONTROL_VALUE,
  item: { formId: formId, controlId: controlId, value: value }
});

export const setFormControlErrorMessage = ({ fId, cId, error, isValid }) => ({
  type: SET_FORM_CONTROL_ERROR_MESSAGE,
  item: { fId: fId, cId: cId, error: error, isValid: isValid }
});