import React from "react";
import styled from 'styled-components'
import {Button, Form} from 'react-bootstrap';

const LoginCard = styled(Form)`
    padding: 20px;
    width: 30%;
    margin: auto;
    box-sizing: border-box;
    min-width: 300px;
`


export default class LogIn extends React.Component {
    render() {
        return (
            <LoginCard>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                
                <a href="#"> Forgot password </a>
            
                <Button variant="primary" size="md" block>
                    Log In
                </Button>
                Or <a href="#">Sign Up!</a>
            
            </LoginCard>
        );
  }
}


