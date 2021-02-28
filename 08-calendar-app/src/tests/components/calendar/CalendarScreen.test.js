import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'
import { CalendarScreen } from '../../../components/calendar/CalendarScreen'

// jest.mock('../../../actions/events', () => ({
//   eventStartDelete: jest.fn()
// }))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
  calendar: {
    events: [],
    activeEvent: null
  },
  auth: {
    uid: '123',
    name: 'chrisloarryn'
  },
  ui: {
    openModal: false
  }
}
const store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
  <Provider store={store}>
    <CalendarScreen />
  </Provider>
)

describe('Tests in <CalendarScreen />', () => {
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
