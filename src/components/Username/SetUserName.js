import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { useValidator } from '../hooks/useValidator';
import { setUsername, setFormControlValue } from '../../state/actions';
import { VALIDATION_SCHEMA } from '../validationSchema';

function SetUserName() {
  const { dispatch,
    state: {
      formControls: { formUsername: {
        username: { error, currentValue }
      } }
    }
  } = useAppContext();
  const formId = 'formUsername';

  const { validate } = useValidator();

  const successCallback = (value) => {
    dispatch(setUsername(value));
  };

  const handleOnChange = ({ target }) => {
    let { id, value } = target;
    value = value.trim();
    dispatch(setFormControlValue({
      formId,
      controlId: id,
      value: value
    }));
    validateControl(id, value);
    successCallback(value === "" ? 'anonymous' : value);
  };

  const validateControl = (id, value) => {
    const fieldSchema = VALIDATION_SCHEMA.find(element => element[id]);
    const rules = Object.keys(fieldSchema[id]);
    for (let rule of rules) {
      const isValid = validate({
        formId,
        controlId: id,
        value: value,
        rule: rule
      });
      if (isValid === false) return;
    }
  };

  return (
    <div>
      <h3>Create username?</h3>
      <div className="field">
        <label>User:</label>
        <input data-testid="username" id="username" value={currentValue} onChange={handleOnChange} />
        <div data-testid="error" className="alert-danger">{error}</div>
      </div>
    </div>
  )
}

export default SetUserName;