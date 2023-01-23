import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSelect = styled.select`
  display: table-cell;
  vertical-align: bottom;
  background-color: whitesmoke;
  margin-right: 1rem;
  height: 2.2rem;
  border-radius: 0.2rem;
  border: solid 0.07rem grey;
  align-content: center;
  color: grey;
  padding-left: 0.7rem;
  width: 22rem;
  box-shadow: 1px 1px 3px rgb(180, 180, 180);
  appearance: none;
`

function Select({ id, onChange, children }) {
  return (
    <StyledSelect id={id} onChange={onChange}>
      {children}
    </StyledSelect>
  )
}

Select.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
}

export default Select
