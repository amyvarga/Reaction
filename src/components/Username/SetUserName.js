import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { useValidateControl } from '../hooks/useValidateControl';
import { setUsername, setFormControlValue } from '../../state/actions';


function SetUserName() {
  const { dispatch,
    state: {
      formControls: { formUsername: {
        username: { error, currentValue }
      } }
    }
  } = useAppContext();

  const formId = 'formUsername';

  const { validateControl } = useValidateControl();

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
    validateControl(id, value, formId);
    successCallback(value === "" ? 'anonymous' : value);
  };

  return (
    <div>
      <h3>Create username?</h3>
      <div className="field">
        <label htmlFor="username">User:</label>
        <input data-testid="username" id="username" value={currentValue} onChange={handleOnChange} />
        <div data-testid="error" className="alert-danger">{error}</div>
      </div>
    </div>
  )
}

export default SetUserName;