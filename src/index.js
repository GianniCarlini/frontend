import React from "react";
import ReactDOM from "react-dom";
import './Index.css'
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
        <App/>,
    document.getElementById("root")
);
serviceWorker.unregister();

//"start": "node server/server.js",