import React from 'react'
import styled from 'styled-components'
import { Map, Button } from '../components/atoms'
import { Body } from '../components/layout'
import { Houses } from '../components/organisms'
import { colors } from '../styles'
import StyledGrid from '../styles/grid'

const DivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin-bottom: 5rem;
`

function Home() {
  return (
    <Body>
      <StyledGrid
        columns="1fr 1fr"
        alignContent="center"
        justifyContent="center"
      >
        <Houses />
        <Map />
        <DivStyled>
          <Button width="100px" backgroundColor={colors.secondary}>
            Cargar más
          </Button>
        </DivStyled>
      </StyledGrid>
    </Body>
  )
}

export default Home
