import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect
} from 'react-router-dom'
import { LoginScreen } from '../Components/Auth/LoginScreen'
import { CalendarScreen } from '../Components/Calendar/CalendarScreen'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/calendar' component={CalendarScreen} />
          <Redirect to='/calendar' />
        </Switch>
      </div>
    </Router>
  )
}
