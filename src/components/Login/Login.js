import React, {Component} from 'react';
import './Login.css'
import {Button, Form} from 'react-bootstrap';

class App extends Component{
    render() {
        return(
            <div className="auth-wrapper">
            <div className="auth-inner">
            <Form className="login-form">
                <h1 className="text-center">Ingresar</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordar" />
                </Form.Group>
                <Button variant="primary" size="lg" block  type="submit">
                    Enviar
                </Button>
            </Form>
            </div>
            </div>
        )
    }
}

export default App;
