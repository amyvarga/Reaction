import React from 'react';
import SetUserName from '../Username/SetUserName';
import { render, fireEvent } from '@testing-library/react';
import { useAppContext } from '../hooks/useAppContext';
import { SET_FORM_CONTROL_VALUE, SET_USERNAME } from '../../state/types';
import defaultInitialState from '../hooks/__mocks__/useAppContextInitialState';

jest.mock('../hooks/useAppContext');

const controlId = 'username';

const setup = value => {
  jest.restoreAllMocks();
  useAppContext.mockReturnValue(defaultInitialState);
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
    useAppContext.mockReturnValue({
      pubsub: jest.fn(),
      dispatch: jest.fn(),
      state: {
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
              currentValue: 'Amy Varga',
              isValid: null
            },
          }
        }
      }
    });
    const { getByTestId } = render(<SetUserName />);
    const thisElement = getByTestId('username');
    //console.log('once', useAppContext().state.formControls.formUsername);
    it('should be equal to the new currentValue', () => {
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