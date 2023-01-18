import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import StyledGrid from '../../styles/grid'

const StyledCard = styled(StyledGrid)`
  border-radius: 0.3rem;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem grey;
  margin-left: 1rem;
  margin-right: 1rem;
`

function Card({children}) {
  return (
    <StyledCard columns rows="auto">
        {children}
    </StyledCard>
  )
}

Card.propTypes = {
    children: PropTypes.node.isRequired
}

export default Card
