import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select, Label } from '../atoms'

function SelectOptions({ id, cityOptions, propertyOptions }) {
  const [selection, setSelection] = useState('')

  const handleChange = (e) => {
    setSelection({
      ...selection,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Debería de haber 1 label y 1 select, no 1 label y 2 select */}
      <Label htmlFor={id} />
      <Select id="propertyType" value={selection} onChange={handleChange}>
        {/* Pasa las opciones como props al Select */}
        {propertyOptions.map((item) => (
          <option key={item.id} value={item.property}>
            {item.property}
          </option>
        ))}
      </Select>
      <Select id="cities" value={selection} onChange={handleChange}>
        {cityOptions.map((item) => (
          <option key={item.id} value={item.city}>
            {item.city}
          </option>
        ))}
      </Select>
    </>
  )
}

SelectOptions.propTypes = {
  id: PropTypes.string,
  propertyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      property: PropTypes.string,
    }),
  ),
  cityOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      city: PropTypes.string,
    }),
  ),
}
export default SelectOptions
