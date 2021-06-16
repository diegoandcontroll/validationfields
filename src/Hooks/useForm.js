import {useState} from 'react'
const typesValidate = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'invalid zip code'
  },

  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'invalid email'
  }
}
const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value){
    if(type === false) return true;
    if(value.length === 0){
      setError('fill the field');
      return false;
    }else if(typesValidate[type] && !typesValidate[type].regex.test(value)){
      setError(typesValidate[type].message);
      return false;
    }else{
      setError(null);
      return true;
    }
  }

  function onChange({target}){
    if(error) validate(target.value);
    setValue(target.value);
  }
  return{
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value)  
  }
}

export default useForm;
