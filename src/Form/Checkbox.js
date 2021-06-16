import React from 'react'

const Checkbox = ({options, value, setValue}) => {
  function handleChange({target}){
    if(target.checked){
      setValue([...value, target.value]);
    }else{
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  }
  return (
    <>
      {options.map((item) => (
        <label key={item}>
          <input 
          type="checkbox"
          value={item}
          checked={value.includes(item)}   
          onChange={handleChange}
          />
          {item}
        </label>
      ))}
    </>
  )
}

export default Checkbox;
