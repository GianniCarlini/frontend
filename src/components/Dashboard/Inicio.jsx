import React, {Component} from 'react';
import logo from "./logo.png"

class Inicio extends Component {
    render() {
        return (
          <div className="content-wrapper">
            <section className="content">
              <h1 class="text-primary">Bienvenido al sistema de reservas</h1>
              <img
                src={logo}
                className="App-logo"
                alt="logo"
                width="600"
                height="600"
              />
            </section>
          </div>
        );
    }
}

export default Inicio;