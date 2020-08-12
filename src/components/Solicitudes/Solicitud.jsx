import React, {Component} from 'react';
import FormularioCreate from '../../service/FormularioCreate';
import '../css/span.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const Tipo = [{ value: 'Sillon', label: 'Sillón'},{ value: 'Pabellon', label: 'Pabellón'}]
class Solicitud extends Component{
  
  constructor(){
		super();
		this.state = {
			fieldPaciente:"",
			fieldIngreso:"",
			fieldMotivo:"",
			fieldTipo:"",
		}
	}

    render() {
        return (
          <div className="content-wrapper">
            <section className="content-header">
              <h1>Reserva de cama de recuperación</h1>
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
                      <label htmlFor="exampleFormControlSelect2"><h6 class="heading">Tipo de reserva<span>*</span></h6></label>
                          <select
                          className="form-control"
                          id="exampleFormControlSelect2"
                          value={this.state.fieldTipo}
            	            onChange={(event)=>this.setState({fieldTipo:event.target.value})}>
                          <option value="" selected disabled hidden>Please select</option>
                          <option>Sillón</option>
                          <option>Pabellón</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          <h6>Motivo</h6>
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          defaultValue={""}
                          value={this.state.fieldMotivo}
							            onChange={(event)=>this.setState({fieldMotivo:event.target.value})}
                        />
                      </div>
                      <div className="form-group">
                      <label htmlFor="exampleFormControlSelect2"><h6 class="heading">Fecha<span>*</span></h6></label>
                          <input type="text" class="form-control" placeholder="dd-MM-yyyy HH:mm"
            	              value={this.state.fieldIngreso}
            	              onChange={(event)=>this.setState({fieldIngreso:event.target.value})}
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
		const res = await FormularioCreate.create(this.state)
		if (res.success) {
			window.location.replace("/solicitud/ver")
		}
		else {
			alert("Error ==>"+res.message.message)
		}
	}
}

export default Solicitud;