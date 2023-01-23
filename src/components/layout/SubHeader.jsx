import React from 'react'
import styled from 'styled-components'
import StyledGrid from '../../styles/grid'
import { SearchButton, SelectOptions } from '../molecules'

const SubHeaderStyled = styled(StyledGrid)`
  display: block;
  padding: 1rem;
  background-color: #e3f9f2;
  border-top: 0.1rem solid #c7f4e6;
  border-bottom: 0.1rem solid #c7f4e6;
`

function SubHeader() {
  const propertyType = [
    { id: 1, property: 'Piso, chalet o garaje...' },
    { id: 2, property: 'Piso' },
    { id: 3, property: 'Chalet' },
    { id: 4, property: 'Garaje' },
  ]

  const cities = [
    {
      id: 1,
      city: 'Madrid, Barcelona o Zaragoza...',
    },
    { id: 2, city: 'Madrid' },
    { id: 3, city: 'Barcelona' },
    { id: 4, city: 'Zaragoza' },
  ]

  return (
    <SubHeaderStyled columns="fr 1fr 1fr 1fr" marginTop="0" gap="1rem">
      <SelectOptions cityOptions={cities} propertyOptions={propertyType} />
      <SearchButton />
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
