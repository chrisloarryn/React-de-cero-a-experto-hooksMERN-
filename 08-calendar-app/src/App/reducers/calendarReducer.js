import moment from 'moment'
import { types } from '../types/types'
const initialState = {
  events: [
    {
      id: new Date().getTime(),
      title: 'Birthday',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      bgcolor: '#fafa',
      notes: 'Buy pancakes',
      user: {
        _id: '123',
        name: 'chrisloarryn'
      }
    }
  ],
  activeEvent: null
}

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload]
      }
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload
      }
    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null
      }
    default:
      return state
  }
}
