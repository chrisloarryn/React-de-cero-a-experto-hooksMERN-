import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import { Navbar } from '../UI/Navbar'
import { messages } from '../../Helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { uiOpenModal } from '../../actions/ui'

import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { eventSetActive } from '../../actions/events'
import { AddNewFab } from '../UI/AddNewFab'

moment.locale('es')

const localizer = momentLocalizer(moment) // or globalizeLocalizer

export const CalendarScreen = () => {
  const dispatch = useDispatch()
  const { events } = useSelector((state) => state.calendar)

  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  )

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal())
  }
  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e))
  }
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
      <AddNewFab />
      <CalendarModal />
    </div>
  )
}
