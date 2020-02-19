import { renderHook, act } from '@testing-library/react-hooks';
import { useAppContext } from './useAppContext';
import { useValidator } from './useValidator';
import { SET_FORM_CONTROL_ERROR_MESSAGE } from '../../state/types';

jest.mock('./useAppContext');

test('should dispatch setFormControlErrorMessage when value is empty and rule is required', () => {
  const { result } = renderHook(() => useValidator());
  act(() => {
    result.current.validate({
      formId: 'formMessage',
      controlId: 'message',
      value: '',
      rule: 'required'
    });
  });
  expect(useAppContext().dispatch).toHaveBeenCalledWith(expect.objectContaining(
    {
      "type": SET_FORM_CONTROL_ERROR_MESSAGE,
      "item": {
        fId: 'formMessage',
        cId: 'message',
        error: 'Please add a message',
        isValid: false
      }
    })
  );
});