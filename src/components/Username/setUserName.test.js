import React from 'react';
import SetUserName from '../Username/SetUserName';
import { render, fireEvent } from '@testing-library/react';
import { useAppContext } from '../hooks/useAppContext';
import { SET_FORM_CONTROL_VALUE, SET_USERNAME } from '../../state/types';
import getAppContext from '../hooks/__mocks__/getAppContext';

jest.mock('../hooks/useAppContext');
useAppContext.mockReturnValue(getAppContext());

const controlId = 'username';

const setup = value => {
  jest.restoreAllMocks();

  const { getByTestId } = render(<SetUserName />);
  const element = getByTestId('username');
  fireEvent.change(
    element,
    { target: { value } }
  );
  return { element };
};

describe('SetUserName component', () => {
  describe('The input value is set to the state currentValue', () => {
    it('should be equal to the new currentValue', () => {
      useAppContext.mockReturnValueOnce(getAppContext({ username: "Amy Varga" }));
      const { getByTestId } = render(<SetUserName />);
      const thisElement = getByTestId('username');
      expect(thisElement.value).toBe('Amy Varga');
    });
  });

  describe('When the input is changed', () => {
    const value = 'amykin';
    let controlData;

    beforeEach(() => {
      controlData = setup(value);
      //console.log('after', useAppContext().state.formControls.formUsername);
    });

    it('should dispatch setFormControlValue action ', () => {
      expect(useAppContext().dispatch).toHaveBeenCalledWith(
        {
          "type": SET_FORM_CONTROL_VALUE,
          'item': {
            formId: 'formUsername',
            controlId,
            value,
          }
        }
      );
    });

    it('should dispatch setUsername action', () => {
      expect(useAppContext().dispatch).toHaveBeenCalledWith(
        {
          "type": SET_USERNAME,
          "username": value
        }
      );
    });

  });

  it('should dispatch setUsername with "anonymous" when input is only a space character', () => {
    setup(' ');
    expect(useAppContext().dispatch).toHaveBeenCalledWith(
      {
        "type": SET_USERNAME,
        "username": "anonymous"
      }
    );
  });

  it('should trim value passed to setUsername', () => {
    setup('amy  ');
    expect(useAppContext().dispatch).toHaveBeenCalledWith(
      {
        "type": SET_USERNAME,
        "username": "amy"
      }
    );
  });
});