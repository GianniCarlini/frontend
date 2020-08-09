import React, {Component, useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faSpinner} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import FormularioDataService from '../../service/FormularioDataService';

const VerSolicitud = () => {
    const [loading, setLoading] = useState(false);
    const [formulario, setFormulario] = useState([]);
    useEffect(() => {
        setLoading(true);
        FormularioDataService.getFormulario().then(res => {
            setFormulario(res.data)
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        });
    }, []);
    const item = formulario.map((formulario) =>
                  <tr key={formulario.id}>
                    <td>{formulario.id}</td>
                    <td>{formulario.id_paciente}</td>
                    <td>{formulario.tipo}</td>
                    <td>{formulario.fecha_ingreso}</td>
                    <td>{formulario.motivo}</td>
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
                  );
    return (<div className="content-wrapper">
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
                    {item}
                 </tbody>
            </table>
        </section>
    </div>);
}
export default VerSolicitud;
