import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { activeNote } from '../../../actions/notes'
import { startLogout } from '../../../actions/auth'
import { NoteScreen } from '../../../components/notes/NoteScreen'

jest.mock('../../../actions/notes', () => ({
  activeNote: jest.fn()
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
    active: {
      id: 1234,
      title: 'Hello',
      body: 'World',
      date: 0
    },
    notes: []
  }
}

let store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
)

describe('Tests in <NoteScreen />', () => {
  test('should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should invoke activeNote', () => {
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Hello again'
      }
    })
    expect(activeNote).toHaveBeenLastCalledWith(1234, {
      body: 'World',
      title: 'Hello again',
      id: 1234,
      date: 0
    })
  })
})
