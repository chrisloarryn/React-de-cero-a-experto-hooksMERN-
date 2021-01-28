import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { firebase } from '../../firebase/firebase-config'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { act } from '@testing-library/react'
import { login } from '../../actions/auth'
import { AppRouter } from '../../routers/AppRouter'

jest.mock('../../actions/auth', () => ({
  login: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    active: {
      id: 'ABC'
    },
    notes: []
  }
}

let store = mockStore(initState)
store.dispatch = jest.fn()

describe('Tests in <AppRouter />', () => {
  test('should invoke login if user is authenticated', async () => {
    let user

    await act(async () => {
      const userCred = await firebase
        .auth()
        .signInWithEmailAndPassword('test@testing.com', '123456')
      user = userCred.user
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      )
    })
    expect(login).toHaveBeenCalledWith('8V8JlgAH5QhUbBm33iOFRz0aMkE3', null)
  })
})
