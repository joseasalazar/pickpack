import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

const LoginCard = styled.div`
    border: opx solid lightgray;
    padding: 20px;
    width: 30%;
    margin: auto;
    box-sizing: border-box;
    min-width: 300px;
`

const CardItem = styled.div`
    padding: 10px;
`


export default class LogIn extends React.Component {
    render() {
        return (
            <LoginCard>
                <CardItem>
                    <input type="text" class="form-control" placeholder="Username"></input>
                </CardItem>
                <CardItem>
                    <input type="password" class="form-control" placeholder="Password"></input>
                </CardItem>
                <CardItem>
                    <a href="#"> Forgot password </a>
                </CardItem>
                <CardItem>
                    <Button variant="primary" size="md" block>
                        Log In
                    </Button>
                    Or <a href="#">Sign Up!</a>
                </CardItem>
            </LoginCard>
        );
  }
}


