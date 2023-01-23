import React from 'react'
import styled from 'styled-components'
import Menu from '../molecules/Menu'

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  color: #892232;
`

function Header() {
  return (
    <HeaderStyled>
      <div>
        <strong>MIPISO.com</strong>
      </div>
      <Menu />
    </HeaderStyled>
  )
}

export default Header
