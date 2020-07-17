import React, {Component} from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import Pabellon from "./components/Pabellon.js";
import Calendario from "./components/Calendario.js";
import Calendario2 from "./components/Calendario2.js";

class App extends Component{
    render() {
        return(
            <Router>
                <Route exact path='' component={Dashboard} />
                <Route exact path='/pabellon' component={Pabellon} />
                <Route exact path='/cal' component={Calendario} />
                <Route exact path='/demo' component={Calendario2} />
            </Router>
        )
    }
}
export default App;
