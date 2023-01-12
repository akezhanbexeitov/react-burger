import { ChangeEvent, useState } from "react";

type TInputValues = {
  [value: string]: string
}

export const useForm = (inputValues: TInputValues) => {
    const [values, setValues] = useState(inputValues);
  
    const handleChange = (event: ChangeEvent) => {
      const {value, name} = event.target as HTMLInputElement;
      setValues({...values, [name]: value});
    };

    return {values, handleChange, setValues};
}
