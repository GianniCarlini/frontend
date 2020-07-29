import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital} from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
    render() {
        return (
          <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
              <a href="#" className="brand-link">
                <FontAwesomeIcon icon={faHospital} />
                <span> </span>
                <span> </span>
                <span className="brand-text font-weight-light">GCR</span>
              </a>
              <div className="sidebar">
                <nav className="mt-2">
                  <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    {/* Solicitudes */}
                    <li className="nav-item active has-treeview">
                      <a href="#" className="nav-link">
                        <i className="nav-icon far fa-calendar-check" />
                        <p>
                          Solicitudes
                          <i className="fas fa-angle-left right" />
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <a href="/solicitud" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Realizar Solicitud </p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/solicitud/ver" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Ver Solicitudes</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Pabellon */}
                    <li className="nav-item has-treeview">
                      <a href="#" className="nav-link">
                        <i className="nav-icon fa fa-heartbeat" />
                        <p>
                          Pabellón
                          <i className="fas fa-angle-left right" />
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <a href="/reserva/pabellon" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Reservar Pabellón</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/reserva/pabellon/ver" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Ver Pabellónes</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Cama */}
                    <li className="nav-item has-treeview">
                      <a href="#" className="nav-link">
                        <i className="nav-icon fa fa-bed" />
                        <p>
                          Cama Recuperacion
                          <i className="fas fa-angle-left right" />
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <a href="/reserva/cama" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Reservar Cama</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/reserva/cama/ver" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Ver Camas</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Sillon */}
                    <li className="nav-item has-treeview">
                      <a href="#" className="nav-link">
                        <i className="nav-icon fa fa-plus-square" />
                        <p>
                          Sillón Quimioterapia
                          <i className="fas fa-angle-left right" />
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <a href="/reserva/sillon" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Reservar Sillón </p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/reserva/sillon/ver" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Ver Sillónes</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Pruebas</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        );
    }
}

export default Menu;