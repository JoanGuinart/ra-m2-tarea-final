import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Card } from '../atoms'

const ImgStyled = styled.img`
  width: 100%;
  border-radius: 0.3rem;
`
const ParragrafStyled = styled.p`
  font-size: 10px;
  color: grey;
  margin-left: 0.5rem;
`
const DivFooterCard = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
  margin: 0.5rem;
`

function CardHouse({ location, price, image }) {
  return (
    <Card>
      <ImgStyled alt="house" src={image}/>
      <ParragrafStyled>{location}</ParragrafStyled>
      <DivFooterCard>
        <h5>{price}</h5>
        <Button>Localizar</Button>
      </DivFooterCard>
    </Card>
  )
}

CardHouse.propTypes = {
  location: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}

export default CardHouse
