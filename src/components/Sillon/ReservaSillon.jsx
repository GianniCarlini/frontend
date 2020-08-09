import React, {Component} from 'react';
import SillonCreate from '../../service/SillonCreate';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class ReservaSillon extends Component{
  
  constructor(){
		super();
		this.state = {
			fieldPaciente:"",
			fieldSillon:"",
      fieldIngreso:"",
      fieldSalida:"",
		}
	}
    render() {
        return (
          <div className="content-wrapper">
            <section className="content-header">
              <h1>Reserva de sillón de quimioterapia</h1>
            </section>
            <section className="content">
              <div className="row">
                <div className="col-md-6">
                  <div className="box box-primary">
                    <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Paciente
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          value={this.state.fieldPaciente}
            	            onChange={(event)=>this.setState({fieldPaciente:event.target.value})}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">
                          Sillon
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect2"
                          value={this.state.fieldSillon}
            	            onChange={(event)=>this.setState({fieldSillon:event.target.value})}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Fecha de ingreso</label>
                          <input type="text" class="form-control" placeholder="dd-MM-yyyy HH:mm"
            	              value={this.state.fieldIngreso}
            	              onChange={(event)=>this.setState({fieldIngreso:event.target.value})}
            	            />
                      </div>
                      <div className="form-group">
                        <label>Fecha de salida</label>
                          <input type="text" class="form-control" placeholder="dd-MM-yyyy HH:mm"
            	              value={this.state.fieldSalida}
            	              onChange={(event)=>this.setState({fieldSalida:event.target.value})}
            	            />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-10">
                          <button type="submit" className="btn btn-primary"  onClick={()=>this.onClickSave()}>
                            Enviar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
    async onClickSave()
    {
      const res = await SillonCreate.create(this.state)
      if (res.success) {
        window.location.replace("/reserva/sillon/ver")
      }
      else {
        alert("Error :c"+res.message.message)
      }
    }
}

export default ReservaSillon;