import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital } from '@fortawesome/free-solid-svg-icons'





class Menu extends Component {
    render() {
        return (
            <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="#" className="brand-link">
      <FontAwesomeIcon icon={faHospital} />
      <span>            </span>
      <span>            </span>
      <span className="brand-text font-weight-light">GCR</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
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
                <a href="/cal" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Realizar Solicitud </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/demo" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Ver Solicitudes</p>
                </a>
              </li>
            </ul>  
          </li>  
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-address-book" />
              <p>
                Reservas
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Reservar Pabellón</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="Pabellon" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Reservar Recuperación</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Reservar Sillon</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>


        )
    }
}

export default Menu;