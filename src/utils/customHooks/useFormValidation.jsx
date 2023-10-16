import { useState } from "react";
import PropTypes from "prop-types";

function useFormValidation(state, setState, validationRules) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const validateForm = () => {
    let newErrors = {};
    for (const field in state) {
      const value = state[field];
      const rules = validationRules[field];
      for (const rule of rules) {
        if (rule.validator(value)) {
          break;
        } else {
          newErrors = {
            ...newErrors,
            [field]: rule.message,
          };
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    errors,
    handleChange,
    validateForm,
    setErrors,
  };
}
useFormValidation.propTypes = {
  validationRules: PropTypes.any,
};
export default useFormValidation;
