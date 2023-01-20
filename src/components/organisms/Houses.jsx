import React from 'react'
import StyledGrid from '../../styles/grid'
import { CardHouse } from '../molecules'
import Data from '../../DataJson'

function Houses() {
  return (
    <StyledGrid>
      {Data.map((house, index) => (
        <CardHouse
          // eslint-disable-next-line react/no-array-index-key
          //   No uses index, dales un id fake mejor
          key={index}
          location={house.location}
          price={house.value}
          image={house.picture}
        />
      ))}
    </StyledGrid>
  )
}

export default Houses
