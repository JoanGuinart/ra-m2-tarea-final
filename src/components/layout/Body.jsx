import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import SubHeader from './SubHeader'

function Body({ children }) {
  return (
    <>
      <Header />
      <SubHeader />
      {children}
    </>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
