import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { Navbar } from '../UI/Navbar'
import { messages } from '../../Helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'

import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'

moment.locale('es')

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = [
  {
    title: 'Birthday',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafa',
    notes: 'Buy pankakes',
    user: {
      _id: '123',
      name: 'chrisloarryn'
    }
  }
]

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  )

  const onDoubleClick = (e) => console.log(e)
  const onSelectEvent = (e) => console.log(e)
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log(event, start, end, isSelected)
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }
    return { style }
  }
  const onViewChange = (e) => {
    setLastView(e)
    localStorage.setItem('lastView', e)
  }
  return (
    <div className='calendar-screen'>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent
        }}
      />
    </div>
  )
}
