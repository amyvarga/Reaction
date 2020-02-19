import React from 'react';
import SetUserName from '../Username/SetUserName';
import { render, screen, fireEvent } from '@testing-library/react';
import { useAppContext } from '../hooks/useAppContext';
import { SET_FORM_CONTROL_VALUE, SET_USERNAME } from '../../state/types';

jest.mock('../hooks/useAppContext');

const controlId = 'username';

const setup = value => {
  jest.resetAllMocks();
  const { getByTestId } = render(<SetUserName />);
  const element = getByTestId('username');
  fireEvent.change(
    element,
    { target: { value } }
  );
  return { element };
};

describe('SetUserName component', () => {
  describe('When the input is changed', () => {
    const value = 'amykin';
    let controlData;

    beforeEach(() => {
      controlData = setup(value);
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

test('should keep a $ in front of the input', () => {
  render(<SetUserName />);
  const input = screen.getByLabelText(/User:/i);
  console.log(input);
  const myValue = 'amyking';
  fireEvent.change(input, { target: { value: myValue } });
  expect(input.value).toEqual(myValue);
});