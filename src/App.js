import React, {Component} from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Pabellon from "./components/Pabellon/ReservaPabellon.jsx";
import VerPabellon from "./components/Pabellon/VerPabellon.jsx";
import Sillon from "./components/Sillon/ReservaSillon.jsx"
import VerSillon from "./components/Sillon/VerSillon.jsx"
import Cama from "./components/Cama/ReservaCama.jsx"
import VerCama from "./components/Cama/VerCama.jsx"
import Solicitud from "./components/Solicitudes/Solicitud.jsx"
import VerSolicitud from "./components/Solicitudes/VerSolicitud.jsx"

class App extends Component{
    render() {
        return(
            <Router>
                <Route exact path='' component={Dashboard} />
                {/*rutas de pabellon*/}
                <Route exact path='/reserva/pabellon' component={Pabellon} />
                <Route exact path='/reserva/pabellon/ver' component={VerPabellon} />
                {/*rutas de sillon*/}
                <Route exact path='/reserva/sillon' component={Sillon} />
                <Route exact path='/reserva/sillon/ver' component={VerSillon} />
                {/*rutas de cama*/}
                <Route exact path='/reserva/cama' component={Cama} />
                <Route exact path='/reserva/cama/ver' component={VerCama} />
                {/*rutas de cama*/}
                <Route exact path='/solicitud' component={Solicitud} />
                <Route exact path='/solicitud/ver' component={VerSolicitud} />
                {/*rutas de prueba*/}
            </Router>
        )
    }
}
export default App;
