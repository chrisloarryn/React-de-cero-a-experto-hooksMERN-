import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext)
  const history = useHistory()
  useEffect(() => {
    user && user.id && history.push('/')
  }, [user, history])
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 234,
            name: 'namdsssde'
          })
        }>
        Login
      </button>
    </div>
  )
}
