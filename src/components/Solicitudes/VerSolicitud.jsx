import React, {Component} from 'react';
import axios from 'axios';

const URL = "http://localhost:8080"

export default class VerSolicitud extends React.Component {
    state = {
        formulario: []
    }

    delete = (id, e) => {
        axios.delete(`${URL}/solicitud/${id}`)
            .then(res => {
                window.location.reload(true);
            })
    }
    componentDidMount() {
        axios.get(`${URL}/solicitud/ver`)
            .then(res => {
                const formulario = res.data;
                this.setState({formulario});
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
                    <th>Id</th>
                    <th>Paciente</th>
                    <th>Tipo</th>
                    <th>Ingreso</th>
                    <th>Motivo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.formulario.map((formulario) => (
                    <tr key={formulario.id}>
                    <td>{formulario.id}</td>
                    <td>{formulario.id_paciente}</td>
                    <td>{formulario.tipo}</td>
                    <td>{formulario.fecha_ingreso}</td>
                    <td>{formulario.motivo}</td>
                    <td>
                      
                      <button
                        value="eliminar"
                        title="Eliminar"
                        type="button"
                        class="btn btn-danger"
                        onClick={(e) => this.delete(formulario.id, e)}
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