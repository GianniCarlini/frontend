import React, { Component } from 'react';
import axios from 'axios';

const URL = "http://localhost:8080"

export default class VerPabellon extends React.Component {
  state = {
    pabellon: [],
  }

  delete = (pabellon, e) => {
    axios.delete(`${URL}/reserva/sillon/delete`, { data: pabellon.quimioId })
      .then(res => window.location.reload(true))
      .catch(error => console.log(error))
  }
  update = (pabellon, e) => {
    window.location = '/reservas/sillon/actualizar/'+ pabellon.id_paciente;
  }

  componentDidMount() {
    axios.get(`${URL}/reserva/sillon/ver`)
      .then(res => {
        const pabellon = res.data;
        this.setState({ pabellon })
      })
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>Reservas de sillones de Quimioterapia</h1>
        </section>
        <section className="content">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Sillon</th>
                <th>Inicio</th>
                <th>Termino</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pabellon.map((pabellon) => (
                <tr key={pabellon.quimioId}>
                  <td>{pabellon.id_paciente}</td>
                  <td>{pabellon.quimioId.id_sillon}</td>
                  <td>{pabellon.quimioId.fecha_ingreso}</td>
                  <td>{pabellon.quimioId.fecha_salida}</td>
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