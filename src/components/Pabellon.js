import React, {Component, useState } from 'react';
import Select from 'react-select'
import DateTimePicker from 'react-datetime-picker';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
class Pabellon extends Component{
  state = {
    value: new Date(),
  }

  onChange = value => this.setState({ value })
    render() {
      const { value } = this.state;
        return (
            <div className="content-wrapper">
              
  <section className="content-header">
    <h1>
      Reserva de pabellón
    </h1>
    
  </section>
  <section className="content">
    <div className="row">
      <div className="col-md-6">
        <div className="box box-primary">
        <form>
            <div className="form-group">
              <label>Paciente</label>
                <Select
                className="paciente"
                defaultValue={" "}
                options={options}
                />
            </div>
            <div className="form-group">
              <label>Pabellón</label>
                <Select
                className="pabellon"
                defaultValue={" "}
                options={options}
                />
            </div>
            <div className="form-group">
              <label>Hora inicio </label>
              <DateTimePicker
              amPmAriaLabel="Select AM/PM"
              calendarAriaLabel="Toggle calendar"
              clearAriaLabel="Clear value"
              dayAriaLabel="Day"
              hourAriaLabel="Hour"
              maxDetail="second"
              minuteAriaLabel="Minute"
              monthAriaLabel="Month"
              nativeInputAriaLabel="Date and time"
              onChange={this.onChange}
              secondAriaLabel="Second"
              value={value}
              yearAriaLabel="Year"
            />
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      First radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Second radio
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" disabled />
                    <label className="form-check-label" htmlFor="gridRadios3">
                      Third disabled radio
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <div className="col-sm-2">Checkbox</div>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Example checkbox
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

        
        )
    }
}

export default Pabellon;