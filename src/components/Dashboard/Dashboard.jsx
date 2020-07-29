import React, {Component} from 'react';

import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import Inicio from "./Inicio.jsx";
//import Footer from "../Footer";

class Dashboard extends Component{
    render() {
        return(
            <div>
            <Header/>
            <Menu/>
            </div>
        )
    }
}
export default Dashboard;