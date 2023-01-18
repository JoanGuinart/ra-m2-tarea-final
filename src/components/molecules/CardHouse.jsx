import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Card } from '../atoms'

const StyledImage = styled.img`
  width: 100%;
  border-radius: 0.3rem;
`
const StyledP = styled.p`
  font-size: 0.6rem;
  color: grey;
  margin-left: 0.5rem;
`
const StyledFooterCard = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  height: 1.25rem;
  margin: 0.5rem;
`

function CardHouse({ location, price, image }) {
  return (
    <Card>
      <StyledImage alt="imageOfHouse" src={image}/>
      <StyledP>{location}</StyledP>
      <StyledFooterCard>
        <h5>{price}</h5>
        <Button>Localizar</Button>
      </StyledFooterCard>
    </Card>
  )
}

CardHouse.propTypes = {
  location: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}

export default CardHouse
