import React from 'react'
import { colors } from '../../styles'
import { Button, Icon } from '../atoms'

function SearchButton() {
  return (
    <Button
     width='2.3rem'
     height='2.3rem'
     backgroundColor={colors.secondary}
    >
      <Icon/>
    </Button>
  )
}

export default SearchButton