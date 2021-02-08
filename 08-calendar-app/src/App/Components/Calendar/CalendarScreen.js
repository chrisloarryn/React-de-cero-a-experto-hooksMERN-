import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

import { Navbar } from '../UI/Navbar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = [
  {
    title: 'Birthday',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafa'
  }
]

export const CalendarScreen = () => {
  return (
    <div className='calendar-screen'>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
      />
    </div>
  )
}
