import React, {Component, useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faSpinner} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import PabellonDataService from '../../service/PabellonDataService';

const VerPabellon = () => {
    const [loading, setLoading] = useState(false);
    const [pabellon, setPabellon] = useState([]);
    useEffect(() => {
        setLoading(true);
        PabellonDataService.getPabellon().then(res => {
            setPabellon(res.data)
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        });
    }, []);
    const item = pabellon.map((pabellon) =>
                  <tr key={pabellon.resId}>
                    <td>{pabellon.id_paciente}</td>
                    <td></td>
                    <td>{pabellon.id_equipo}</td>
                    <td></td>
                    <td></td>
                    <td>{pabellon.motivo}</td>
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
                    {item}
                 </tbody>
            </table>
        </section>
    </div>);
}
export default VerPabellon;
