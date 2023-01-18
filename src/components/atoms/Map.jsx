import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StyledGrid from '../../styles/grid'

/* no puc solucionar el problema de que el mapa es talli per la part inferior :(, puc posar un cover en comptes de contain pero aleshores es talla part de la imatge a mostrar */

const StyledMap = styled(StyledGrid)`
background-image: url("https://www.google.com/maps/d/thumbnail?mid=1oxVaOqy1UOtfgLoqrgQjR3urpNM&hl=es");
background-repeat: no-repeat;
background-position: ;
background-size: contain;
height: 100%;
margin-top: 4rem;
margin-right: 1rem;
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
    children: PropTypes.node
}

export default Map