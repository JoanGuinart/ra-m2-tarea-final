import React from 'react'
import StyledGrid from '../../styles/grid'
import { CardHouse } from '../molecules'
import DataJson from '../../DataJson'

function Houses() {
  return (
    <StyledGrid>
      {DataJson.map((item) => (
        <CardHouse
          key={item.id}
          location={item.location}
          price={item.price}
          image={item.image}
        />
      ))}
    </StyledGrid>
  )
}

export default Houses
