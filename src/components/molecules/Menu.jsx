import React from 'react'
import styled from 'styled-components'

const menuLinks = [
  {
    url: '/buscar',
    label: 'Buscar',
  },
  {
    url: '/datos',
    label: 'Datos',
  },
  {
    url: '/mi-perfil',
    label: 'Mi Perfil',
  },
]

const StyledLi = styled.li`
  display: inline;
  color: grey;
  padding: 1rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

function Menu() {
  return (
    <div>
      <ul>
        {menuLinks.map((item) => (
          <StyledLi key={item.url} to={item.url}>
            {item.label}
          </StyledLi>
        ))}
      </ul>
    </div>
  )
}

export default Menu
