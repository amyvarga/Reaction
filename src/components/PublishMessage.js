import React from 'react';
import { useAppContext } from './hooks/useAppContext';
import { useValidateControl } from './hooks/useValidateControl';
import { newMessage, setFormControlValue } from '../state/actions';

function PublishMessage() {
  const {
    pubsub: { publish },
    dispatch,
    state: { username,
      formControls: { formMessage }
    }
  } = useAppContext();

  const {
    message,
    character
  } = formMessage;

  const formId = 'formMessage';

  const { validateControl } = useValidateControl();

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
    validateControl(id, value, formId);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleSubmit = (evemt) => {
    evemt.preventDefault();
    const formControls = ['message', 'character'];
    const isFormValid = formControls.reduce((result, control) => {
      const { isValid, currentValue } = formMessage[control];
      validateControl(control, currentValue, formId);
      return (!result || !isValid) ? false : true;
    }, true);
    if (isFormValid) successCallback(message.currentValue, username);
  };

  return (
    <div>
      <h3>Got something to say?</h3>
      <form>
        <div className="field">
          <label>Message:</label>
          <input data-testid="message" onKeyPress={handleKeyPress} value={message.currentValue} onChange={handleOnChange} id="message" />
          <div className="alert-danger">{message.error}</div>
        </div>
        <div className="field">
          <label>Character:</label>
          <input data-testid="character" onKeyPress={handleKeyPress} onChange={handleOnChange} value={character.currentValue} id="character" />
          <div className="alert-danger">{character.error}</div>
        </div>
        <button onClick={handleSubmit}>Publish it!</button>
      </form>
    </div>
  );
}

export default PublishMessage;