import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
  // ref to context
  const userContext = useContext(UserContext)
  const { user } = userContext
  return (
    <div>
      <h1>HomeScreen {`${user?.id || 'PLEASE'} ${user?.name || 'LOGIN'}`}</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  )
}
