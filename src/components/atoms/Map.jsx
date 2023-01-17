import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StyledGrid from '../../styles/grid'

const StyledMap = styled(StyledGrid)`
background-color: grey;
padding: 1rem;
height: 40rem;
width: 36rem;
border-radius: 0.4rem;
`

function Map({ children, ...props }) {
  return (
    <StyledMap {...props}>
        {children}
    </StyledMap>
    )
}

Map.propTypes = {
    children: PropTypes.node.isRequired
}

export default Map