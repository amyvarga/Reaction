import { VALIDATION_SCHEMA } from '../validationSchema';
import { useValidator } from './useValidator';

export const useValidateControl = () => {
  const { validate } = useValidator();
  const validateControl = (id, value, formId) => {
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
  return { validateControl };
};