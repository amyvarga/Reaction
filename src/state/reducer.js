import {
  NEW_MESSAGE, SET_USERNAME,
  REACTION_OBJECTS,
  SET_FORM_CONTROL_VALUE,
  SET_FORM_CONTROL_ERROR_MESSAGE
} from './types';

export const initialState = {
  messages: [],
  username: 'anonymous',
  reactionsMap: {},
  formControls: {
    formMessage: {
      message: {
        error: '',
        currentValue: '',
        isValid: null
      },
      character: {
        error: '',
        currentValue: '',
        isValid: null
      }
    },
    formUsername: {
      username: {
        error: '',
        currentValue: '',
        isValid: null
      },
    }
  }
};

const REACTION_TYPES = REACTION_OBJECTS.map(reaction => reaction.type);

const reducer = (state, action) => {
  if (REACTION_TYPES.includes(action.type)) {
    let reactionsMap;
    const { messageId } = action.item;
    const messageReactions = state.reactionsMap[messageId];
    if (messageReactions) {
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [...messageReactions, action.item]
      };
    }
    else {
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [action.item]
      };
    }
    return { ...state, reactionsMap };
  }

  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.item]
      };
    case SET_USERNAME:
      console.log('action', action.username);
      return { ...state, username: action.username };
    case SET_FORM_CONTROL_VALUE:
      let { formId, controlId, value } = action.item;
      return {
        ...state,
        formControls: {
          ...state.formControls,
          [formId]: {
            ...state.formControls[formId],
            [controlId]: {
              ...state.formControls[formId][controlId],
              currentValue: value
            }
          }
        }
      };
    case SET_FORM_CONTROL_ERROR_MESSAGE:
      let { fId, cId, error, isValid } = action.item;
      return {
        ...state,
        formControls: {
          ...state.formControls,
          [fId]: {
            ...state.formControls[fId],
            [cId]: {
              ...state.formControls[fId][cId],
              error: error,
              isValid: isValid
            }
          }
        }
      };
    default:
      return state;
  }
};

export default reducer;