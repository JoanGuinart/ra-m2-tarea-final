import React from 'react'
import { colors, dimensions } from '../../styles'
import { Button, Icon } from '../atoms'

function SearchButton() {
  return (
    <Button
      margin-top={dimensions.base}
      width={dimensions.xxxl}
      height={dimensions.xxxl}
      backgroundColor={colors.secondary}
    >
      <Icon />
    </Button>
  )
}

export default SearchButton
