import { useState, useCallback, useRef } from "react";

export function useForm(defaultValues) {
  const defaultValueRef = useRef(defaultValues);
  const [values, setValues] = useState(defaultValues);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  const resetForm = useCallback(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  return { values, handleChange, setValues, resetForm };
}
