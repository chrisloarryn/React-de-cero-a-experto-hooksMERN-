import React, { memo } from 'react'
import PropTypes from 'prop-types'

export const ShowIncrement = memo(({ increment }) => {
  console.log('generated again :C')
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5)
      }}>
      Add 1+
    </button>
  )
})
ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
}

//  default ShowIncrement
