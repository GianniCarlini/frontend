import React, {Component} from 'react';
import Scheduler from './Scheduler/Scheduler';
import './Scheduler.css';

const data = [
  { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1 },
  { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
];

class Calendario extends Component{

  calendarRef = React.createRef()

  render() {
    return (

  
  <section className="content">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="box box-primary">
        <div>
                <div className='scheduler-container'>
                    <Scheduler events={data}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
    )
  }

}

export default Calendario;