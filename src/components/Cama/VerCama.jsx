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
    axios.delete(`${URL}/reserva/cama/delete`, { data: pabellon.recuId })
      .then(res => window.location.reload(true))
      .catch(error => console.log(error))
  }
  update = (pabellon, e) => {
    window.location = '/reservas/cama/actualizar/'+ pabellon.id_paciente;
  }

  componentDidMount() {
    axios.get(`${URL}/reserva/cama/ver`)
      .then(res => {
        const pabellon = res.data;
        this.setState({ pabellon })
      })
    axios.get(`${URL2}/salas/`)
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
    return resp[0].cama
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>Reservas de Camas</h1>
        </section>
        <section className="content">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Cama</th>
                <th>Inicio</th>
                <th>Termino</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pabellon.map((pabellon) => (
                <tr key={pabellon.recuId}>
                  <td>{pabellon.id_paciente}</td>
                  <td>{this.getPabellonbyId(pabellon.recuId.id_cama)}</td>
                  <td>{pabellon.recuId.fecha_ingreso}</td>
                  <td>{pabellon.recuId.fecha_salida}</td>
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