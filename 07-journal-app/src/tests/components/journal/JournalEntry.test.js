import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { JournalEntry } from '../../../components/journal/JournalEntry'
import { activeNote } from '../../../actions/notes'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}

let store = mockStore(initState)
store.dispatch = jest.fn()

const note = {
  id: 10,
  date: 0,
  title: 'Hello',
  body: 'World',
  url: 'https://someplace.com/photo.jpg'
}

const wrapper = mount(
  <Provider store={store}>
    <JournalEntry {...note} />
  </Provider>
)

describe('Tests in <JournalEntry />', () => {
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should invoke activeNote', () => {
    wrapper.find('.journal__entry').prop('onClick')()
    expect(store.dispatch).toHaveBeenCalledWith(
      activeNote(note.id, { ...note })
    )
  })
})
