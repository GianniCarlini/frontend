import React, {Component} from 'react';

import Header from "../Dashboard/Header";
import Menu from "../Dashboard/Menu";
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