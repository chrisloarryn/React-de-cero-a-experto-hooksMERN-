import React, { memo } from 'react'

export const Son = memo(({ number, increment }) => {
  console.log('  generated again :(  ')

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(number)}>
      {number}
    </button>
  )
})
