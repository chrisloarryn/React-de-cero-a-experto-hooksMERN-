import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'

import { UserContext } from './UserContext'

export const AppRouter = () => {
  const { user } = useContext(UserContext)

  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/about" component={AboutScreen} />
            {!user.id && <Route exact path="/login" component={LoginScreen} />}
            <Route exact path="/" component={HomeScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
