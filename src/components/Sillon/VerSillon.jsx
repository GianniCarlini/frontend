import React, {Component,useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faSpinner} from '@fortawesome/free-solid-svg-icons'
import SillonDataService from '../../service/SillonDataService';

const VerSillon = () => {
  const [loading, setLoading] = useState(false);
  const [sillon, setSillon] = useState([]);
  useEffect(() => {
      setLoading(true);
      SillonDataService.getSillon().then(res => {
          setSillon(res.data)
          setLoading(false);
      }).catch(error => {
          console.log(error);
          setLoading(false);
      });
  }, []);
  const item = sillon.map((sillon) =>
                <tr key={sillon.quiomioId}>
                  <td>{sillon.id_paciente}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{sillon.estado}</td>
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
                      <th>Sillon</th>
                      <th>Inicio</th>
                      <th>Termino</th>
                      <th>Estado</th>
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
export default VerSillon;