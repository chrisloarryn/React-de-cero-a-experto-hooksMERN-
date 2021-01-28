import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { startNewNote } from '../../../actions/notes'
import { Sidebar } from '../../../components/journal/Sidebar'
import { startLogout } from '../../../actions/auth'

jest.mock('../../../actions/notes', () => ({
  startNewNote: jest.fn()
}))

jest.mock('../../../actions/auth', () => ({
  startLogout: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
  auth: {
    uid: 1,
    name: 'Christopher'
  },
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    active: null,
    notes: []
  }
}

let store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
  <Provider store={store}>
    <Sidebar />
  </Provider>
)

describe('Tests in <Sidebar />', () => {
  test('should render correctly', () => {
    // snapshot
    expect(wrapper).toMatchSnapshot()
  })
  test('should invoke logout action', () => {
    // simulate logout
    wrapper.find('button').prop('onClick')()
    expect(startLogout).toHaveBeenCalled()
  })
  test('should invoke startNewNoteAction', () => {
    // simulate startNewNote
    wrapper.find('.journal__new-entry').prop('onClick')()
    expect(startNewNote).toHaveBeenCalled()
  })
})
