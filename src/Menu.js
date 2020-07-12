import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital } from '@fortawesome/free-solid-svg-icons'


class Menu extends Component {
    render() {
        return (
            <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <FontAwesomeIcon icon={faHospital} />
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
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-address-book" />
              <p>
                Medicos
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/charts/chartjs.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Lista Medicos</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/flot.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Agregar Medico</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/inline.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Por si la xd</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-tree" />
              <p>
                UI Elements
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/UI/general.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>General</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/icons.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Icons</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/buttons.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Buttons</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/sliders.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Sliders</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/modals.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Modals &amp; Alerts</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/navbar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Navbar &amp; Tabs</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/timeline.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Timeline</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/ribbons.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Ribbons</p>
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