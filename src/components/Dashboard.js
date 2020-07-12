import React, {Component} from 'react';

import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";

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