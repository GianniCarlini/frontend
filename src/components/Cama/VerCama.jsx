import React, {Component,useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faSpinner} from '@fortawesome/free-solid-svg-icons'
import CamaDataService from '../../service/CamaDataService';

const VerCama = () => {
  const [loading, setLoading] = useState(false);
  const [cama, setCama] = useState([]);
  useEffect(() => {
      setLoading(true);
      CamaDataService.getCama().then(res => {
          setCama(res.data)
          setLoading(false);
      }).catch(error => {
          console.log(error);
          setLoading(false);
      });
  }, []);
  const item = cama.map((cama) =>
                <tr key={cama.recuId}>
                  <td>{cama.id_paciente}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{cama.estado}</td>
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
          <h1>Reserva de cama</h1>
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
export default VerCama;