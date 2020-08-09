import React, {Component} from 'react';
import axios from 'axios';

const URL = "http://localhost:8080"

export default class VerPabellon extends React.Component {
    state = {
        pabellon: []
    }

    delete = (id, e) => {
        axios.delete(`${URL}/reserva/pabellon/delete`)
            .then(res => {
                window.location.reload(true);
            })
    }
    componentDidMount() {
        axios.get(`${URL}/reserva/pabellon/ver`)
            .then(res => {
                const pabellon = res.data;
                this.setState({pabellon});
            })
    }

    render() {
        return (
          <div className="content-wrapper">
            <section className="content-header">
              <h1>Solicitud</h1>
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
                    <td>{pabellon.resId.id_pabellon}</td>
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
                        onClick={(e) => this.delete(pabellon.resId, e)}
                      >
                        Eliminar
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