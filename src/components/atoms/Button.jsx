import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${(background) => background || ''};
  background-color: ${({ backgroundColor }) => backgroundColor || '#7C6DA1'};
  color: white;
  border: hidden;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  width: ${({ width }) => width || '4.5rem'};
  height: ${({ height }) => height || '1.5rem'};
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`

function Button({ ...props }) {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
