import React, { Component } from 'react';
import axios from 'axios';

const URL = "http://localhost:8080"
const URL2 = "http://localhost:8081"

export default class VerPabellon extends React.Component {
  state = {
    pabellon: [],
    salas: []
  }

  delete = (pabellon, e) => {
    axios.delete(`${URL}/reserva/pabellon/delete`, { data: pabellon.resId })
      .then(res => window.location.reload(true))
      .catch(error => console.log(error))
  }
  update = (pabellon, e) => {
    window.location = '/reservas/pabellon/actualizar/'+ pabellon.id_paciente;
    
  }

  componentDidMount() {
    axios.get(`${URL}/reserva/pabellon/ver`)
      .then(res => {
        const pabellon = res.data;
        this.setState({ pabellon })
      })
    axios.get(`${URL2}/pabellon/`)
      .then(res => {
        const salas = res.data;
        this.setState({ salas })
      })
  }
  getPabellonbyId = (id)=>{
    console.log("id:",id)
    let resp = this.state.salas.filter(salas=>salas.id==id)
    if(resp.length==0){
      return ""
    }
    console.log("entro",resp[0].id)
    return resp[0].sala
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>Reservas de Pabellones</h1>
        </section>
        <section className="content">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Pabellon</th>
                <th>Equipo</th>
                <th>Inicio</th>
                <th>Termino</th>
                <th>Motivo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pabellon.map((pabellon) => (
                <tr key={pabellon.resId}>
                  <td>{pabellon.id_paciente}</td>
                  <td>{this.getPabellonbyId(pabellon.resId.id_pabellon)}</td>
                  <td>{pabellon.id_equipo}</td>
                  <td>{pabellon.resId.fecha_ingreso}</td>
                  <td>{pabellon.resId.fecha_salida}</td>
                  <td>{pabellon.motivo}</td>
                  <td>
                    <button
                      value="eliminar"
                      title="Eliminar"
                      type="button"
                      class="btn btn-danger"
                      onClick={(e) => this.delete(pabellon, e)}
                    >
                      Eliminar
                      </button>
                      &nbsp;
                      <button
                      value="actualizar"
                      title="Actualizar"
                      type="button"
                      class="btn btn-primary"
                      onClick={(e) => this.update(pabellon, e)}
                    >
                      Actualizar
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}