import React, {Component, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

class Calendario extends Component{

  calendarRef = React.createRef()

  render() {
    return (

  
  <section className="content">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="box box-primary">
        <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'timeGridWeek,timeGridDay'
            }}
        events={[
          {title: "event 1", date: "2020-07-18"}
        ]}
      />
        </div>
      </div>
    </div>
  </section>
    )
  }

}

export default Calendario;