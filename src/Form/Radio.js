import React from 'react'

const Radio = ({options, value, setValue}) => {
  return (
    <>
      {options.map((item) =>(
        <label key={item}>
          <input 
          type="radio"
          value={item}
          checked={value === item}
          onChange={(event) => setValue(event.target.value)} 
          />
          {item}
        </label>
      ))}
    </>
  )
}

export default Radio
