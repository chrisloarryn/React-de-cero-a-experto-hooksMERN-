import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { RegisterScreen } from '../../../components/auth/RegisterScreen'
import { types } from '../../../types/types'

jest.mock('../../../actions/auth', () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null
  }
}

let store = mockStore(initState)
// store.dispatch = jest.fn()

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegisterScreen />
    </MemoryRouter>
  </Provider>
)

describe('Tests in <RegisterScreen />', () => {
  test('should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should handle respective action', () => {
    const emailField = wrapper.find('input[name="email"]')
    emailField.simulate('change', {
      target: {
        name: 'email',
        value: ''
      }
    })
    wrapper.find('form').simulate('submit', {
      preventDefault() {}
    })
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: types.UI_SET_ERROR,
      payload: 'Email is not valid'
    })
  })
  test('should show box with error', () => {
    const initState = {
      auth: {},
      ui: {
        loading: false,
        msgError: 'Email is not valid'
      }
    }

    let store = mockStore(initState)

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterScreen />
        </MemoryRouter>
      </Provider>
    )

    expect(wrapper.find('.auth__alert-error').exists()).toBe(true)
    expect(wrapper.find('.auth__alert-error').text().trim()).toBe(
      initState.ui.msgError
    )
  })
})
