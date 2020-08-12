import React, {Component} from 'react';
import SillonCreate from '../../service/SillonCreate';
import axios from 'axios';
import '../css/span.css'


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
      console.log(this.state.fieldIngreso)
        return (
          <div className="content-wrapper">
            <section className="content-header">
            </section>
            <section className="content">
              <div className="row">
                <div className="col-md-6">
                  <div className="box box-primary">
                    <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                        <h6 class="heading">Paciente<span>*</span></h6>
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          value={this.state.fieldPaciente}
            	            onChange={(event)=>this.setState({fieldPaciente:event.target.value})}>
                          <option value="" selected disabled hidden>Please select</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">
                        <h6 class="heading">Sillón<span>*</span></h6>
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect2"
                          value={this.state.fieldSillon}
            	            onChange={(event)=>this.setState({fieldSillon:event.target.value})}>
                          <option value="" selected disabled hidden>Please select</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label><h6 class="heading">Fecha Ingreso<span>*</span></h6></label>
                          <input type="datetime-local" class="form-control" placeholder="dd-MM-yyyy HH:mm"
            	              value={this.state.fieldIngreso}
            	              onChange={(event)=>this.setState({fieldIngreso:event.target.value})}
            	            />
                      </div>  
                      <div className="form-group">
                        <label><h6 class="heading">Fecha Salida<span>*</span></h6></label>
                          <input type="datetime-local" class="form-control" placeholder="dd-MM-yyyy HH:mm"
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