import React from 'react'
import styled from 'styled-components'


const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  color: #892232;
`

const StyledLi = styled.li`
display: inline;
color: grey;
padding: 1rem;
&:hover {
  text-decoration: underline;
  cursor: pointer;
}
`

function Header() {
  return (
    <HeaderStyled>
      <div><strong>MIPISO.com</strong></div>
      <div>
        <ul>
          <StyledLi>Busca</StyledLi>
          <StyledLi>Datos</StyledLi>
          <StyledLi>Mi Perfil</StyledLi>
        </ul>
      </div>
    </HeaderStyled>
  )
}

export default Header
