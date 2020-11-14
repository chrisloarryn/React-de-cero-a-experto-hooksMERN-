import React, { useState, useEffect } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    console.log('user has been changed!')
  }, [user])
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}>
      <AppRouter />
    </UserContext.Provider>
  )
}
