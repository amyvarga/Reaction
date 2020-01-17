import React from 'react';
import { useAppContext } from './hooks/useAppContext';
import { useValidator } from './hooks/useValidator';
import { newMessage, setFormControlValue } from '../state/actions';
import { VALIDATION_SCHEMA } from './validationSchema';

function PublishMessage() {
  const {
    pubsub: { publish },
    dispatch,
    state: { username,
      formControls: { formMessage: {
        message: { error: messageErr, currentValue: messageVal, isValid: messageValid },
        character: { error: characterErr, currentValue: characterVal, isValid: characterValid }
      } }
    }
  } = useAppContext();
  const formId = 'formMessage';

  const { validate } = useValidator();

  const successCallback = (text, username) => {
    publish(newMessage(text, username));
  };

  const handleOnChange = ({ target }) => {
    const { id, value } = target;
    dispatch(setFormControlValue({
      formId,
      controlId: id,
      value: value
    }));
    validation(id, value);
  };

  const validation = (id, value) => {
    const fieldSchema = VALIDATION_SCHEMA.find(element => element[id]);
    const rules = Object.keys(fieldSchema[id]);
    for (let rule of rules) {
      const isValid = validate({
        formId,
        controlId: id,
        value: value,
        rule: rule
      });
      if (isValid === false) break;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleSubmit = (evemt) => {
    evemt.preventDefault();
    let formIsValid = true;
    const formControls = ['message', 'character'];
    for (let formControl of formControls) {
      if (eval(`${formControl}Valid`) === null || eval(`${formControl}Valid`) === false) {
        formIsValid = false;
        validation(formControl, eval(`${formControl}Val`));
      }
    }
    if (formIsValid === true) {
      successCallback(messageVal, username);
    }
  };

  return (
    <div>
      <h3>Got something to say?</h3>
      <form>
        <div className="field">
          <label>Message:</label>
          <input data-testid="message" onKeyPress={handleKeyPress} value={messageVal} onChange={handleOnChange} id="message" />
          <div className="alert-danger">{messageErr}</div>
        </div>
        <div className="field">
          <label>Character:</label>
          <input data-testid="character" onKeyPress={handleKeyPress} onChange={handleOnChange} value={characterVal} id="character" />
          <div className="alert-danger">{characterErr}</div>
        </div>
        <button onClick={handleSubmit}>Publish it!</button>
      </form>
    </div>
  );
}

export default PublishMessage;