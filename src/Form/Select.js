import React from 'react'

const Select = ({options, value, setValue}) => {
  
  return (
    <select value={value} onChange={(event) => setValue(event.target.value)}>
      <option value="" disabled>Select</option>
      {options.map((option) =>(
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}

export default Select;
