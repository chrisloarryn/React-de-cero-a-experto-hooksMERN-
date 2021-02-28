import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import moment from 'moment'
import thunk from 'redux-thunk'
import { act } from '@testing-library/react'
import Swal from 'sweetalert2'
import '@testing-library/jest-dom'

import { CalendarModal } from '../../../components/calendar/CalendarModal'
import {
  eventStartUpdate,
  eventClearActiveEvent,
  eventStartAddNew
} from '../../../actions/events'

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}))

jest.mock('../../../actions/events', () => ({
  eventStartUpdate: jest.fn(),
  eventClearActiveEvent: jest.fn(),
  eventStartAddNew: jest.fn()
}))

// Storage.prototype.setItem = jest.fn()

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const now = moment().minutes(0).seconds(0).add(1, 'hours') // 3:00:00
const nowPlus1 = now.clone().add(1, 'hours')

const initState = {
  calendar: {
    events: [],
    activeEvent: {
      title: 'hello world',
      notes: 'some notes',
      start: now.toDate(),
      end: nowPlus1.toDate()
    }
  },
  auth: {
    uid: '123',
    name: 'chrisloarryn'
  },
  ui: {
    modalOpen: true
  }
}
const store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
  <Provider store={store}>
    <CalendarModal />
  </Provider>
)

describe('Tests in <CalendarModal />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render correctly', () => {
    // expect(wrapper.find('.modal').exists()).toBe(true)
    expect(wrapper.find('Modal').prop('isOpen')).toBe(true)
  })
  test('should invoke update and modalClose actions', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault() {}
    })
    expect(eventStartUpdate).toHaveBeenCalledWith(
      initState.calendar.activeEvent
    )
    expect(eventClearActiveEvent).toHaveBeenCalled()
  })
  test('should show an error if title is empty', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault() {}
    })
    expect(wrapper.find('input[name="title"]').hasClass('is-invalid')).toBe(
      true
    )
  })
  test('should create a new element', () => {
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
        modalOpen: true
      }
    }
    const store = mockStore(initState)
    store.dispatch = jest.fn()

    const wrapper = mount(
      <Provider store={store}>
        <CalendarModal />
      </Provider>
    )

    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Hello from tests'
      }
    })

    wrapper.find('form').simulate('submit', {
      preventDefault() {}
    })

    expect(eventStartAddNew).toHaveBeenCalledWith({
      end: expect.anything(),
      start: expect.anything(),
      title: 'Hello from tests',
      notes: ''
    })

    expect(eventClearActiveEvent).toHaveBeenCalled()
  })
  test('should validate dates', () => {
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Hello from tests'
      }
    })

    const today = new Date()

    act(() => {
      wrapper.find('DateTimePicker').at(1).prop('onChange')(today)
      wrapper.find('form').simulate('submit', {
        preventDefault() {}
      })
    })

    expect(Swal.fire).not.toHaveBeenCalled()
  })
})
