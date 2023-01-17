import React from 'react'
import PropTypes from 'prop-types'


function Label({ children, htmlFor}) {
  return (
    <label htmlFor={htmlFor}>
        {children}
    </label>
  )
}

Label.propTypes = {
    children: PropTypes.node.isRequired,
    htmlFor: PropTypes.string
}

export default Label