import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faSpinner} from '@fortawesome/free-solid-svg-icons'

class VerCama extends Component{
    render() {
        return (
          <div className="content-wrapper">
            <section className="content-header">
              <h1>Reserva de pabellón</h1>
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
                  <tr>
                    <td>15</td>
                    <td>Ratón</td>
                    <td>15</td>
                    <td>100</td>
                    <td>Acostao de pana</td>
                    <td>
                      <button
                        value="actualizar"
                        title="Actualizar"
                        type="button"
                        className="btn btn-info"
                      >
                        <FontAwesomeIcon icon={faSpinner} />
                      </button>
                      &nbsp;
                      <button
                        value="eliminar"
                        title="Eliminar"
                        type="button"
                        class="btn btn-danger"
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Teclado</td>
                    <td>34</td>
                    <td>340</td>
                    <td>340</td>
                    <td>340</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Pantalla</td>
                    <td>10</td>
                    <td>400</td>
                    <td>400</td>
                    <td>400</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        );
    }
}
export default VerCama;