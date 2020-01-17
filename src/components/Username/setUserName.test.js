import React from 'react';
import SetUserName from '../Username/SetUserName';
import { render, fireEvent } from '@testing-library/react';
import { useAppContext } from '../hooks/useAppContext';
import { SET_FORM_CONTROL_VALUE, SET_USERNAME } from '../../state/types';

jest.mock('../hooks/useAppContext');

describe('SetUserName component', () => {
  it('should dispatch setFormControlValue when input is added', () => {
    const { getByTestId } = render(<SetUserName />);
    fireEvent.change(
      getByTestId('username'),
      { target: { value: 'Amykin' } }
    );
    expect(useAppContext().dispatch).toHaveBeenCalledWith(
      {
        "type": SET_FORM_CONTROL_VALUE,
        'item': {
          'formId': 'formUsername',
          'controlId': 'username',
          'value': 'Amykin',
        }
      }
    );
  });

  it('should dispatch setUsername when input is added', () => {
    const { getByTestId } = render(<SetUserName />);
    fireEvent.change(
      getByTestId('username'),
      { target: { value: 'Amy' } }
    );
    expect(useAppContext().dispatch).toHaveBeenCalledWith(
      {
        "type": SET_USERNAME,
        "username": "Amy"
      }
    );
  });

  it('should set dispatch setUsername with "anonymous" when input is spaces', () => {
    const { getByTestId } = render(<SetUserName />);
    fireEvent.change(
      getByTestId('username'),
      { target: { value: '  ' } }
    );
    expect(useAppContext().dispatch).toHaveBeenCalledWith(
      {
        "type": SET_USERNAME,
        "username": "anonymous"
      }
    );
  });

});

