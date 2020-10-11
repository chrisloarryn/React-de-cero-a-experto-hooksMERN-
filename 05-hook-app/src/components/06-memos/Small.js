import React, { memo } from 'react'

export const Small = memo(({ value }) => {
  console.log('Component Called Again')
  return <small>{value}</small>
})
