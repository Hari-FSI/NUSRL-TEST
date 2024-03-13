// EventCalendar.js

import React from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const events = [
  {
    allDay: false,
    end: new Date('2024-03-13T05:40:41.440Z'),
    start: new Date('2024-03-13T04:40:41.439Z'),
    title: 'test'
  },
  {
    allDay: false,
    end: new Date('2024-03-12T04:30:00.000Z'),
    start: new Date('2024-03-11T23:30:00.000Z'),
    title: 'test larger'
  },
  {
    allDay: false,
    end: new Date('2024-03-12T17:30:00.000Z'),
    start: new Date('2024-03-12T09:30:00.000Z'),
    title: 'test larger'
  },
  {
    allDay: true,
    end: new Date('2024-03-12T18:30:00.000Z'),
    start: new Date('2024-03-11T18:30:00.000Z'),
    title: 'test all day'
  },
  {
    allDay: true,
    end: new Date('2024-03-13T18:30:00.000Z'),
    start: new Date('2024-03-11T18:30:00.000Z'),
    title: 'test 2 days'
  },
  {
    allDay: false,
    end: new Date('2024-03-15T09:40:41.440Z'),
    start: new Date('2024-03-12T09:40:41.440Z'),
    title: 'test multi-day'
  }
];

const EventCalendar = () => {
  return (
    <div style={{ height: '600px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.MONTH}
        popup
      />
    </div>
  );
};

export default EventCalendar;

