import { VALIDATION_SCHEMA } from '../validationSchema';
import { setFormControlErrorMessage } from '../../state/actions';
import { useAppContext } from './useAppContext';

const findError = (controlId, rule) => {
  const schemaObject = VALIDATION_SCHEMA.find(element => element[controlId]);
  return schemaObject[controlId][rule];
};

export const useValidator = () => {
  let error = '';
  let isValid = null;
  const { dispatch } = useAppContext();
  const validate = ({ formId, controlId, value, rule }) => {
    if (rule === 'required') {
      if (value.length === 0) {
        error = findError(controlId, rule);
        isValid = false;
      }
      if (value.length > 0) {
        error = '';
        isValid = true;
      }
      dispatch(setFormControlErrorMessage({
        fId: formId,
        cId: controlId,
        error,
        isValid
      }));
      if (!isValid) return false;
    }
    if (rule === 'length') {
      if (value.length <= 6) {
        error = findError(controlId, rule);
        isValid = false;
      }
      if (value.length > 6) {
        error = '';
        isValid = true;
      }
      dispatch(setFormControlErrorMessage({
        fId: formId,
        cId: controlId,
        error,
        isValid
      }));
      if (!isValid) return false;
    }
    return true;
  };
  return { validate };
};