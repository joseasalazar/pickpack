import React from "react";
import 'antd/dist/antd.css';
import styled from 'styled-components'
import { Icon, Input, Button, Checkbox, Row, Col } from 'antd';

const LoginCard = styled.div`
    border: opx solid lightgray;
    padding: 20px;
    width: 30%;
    margin: auto;
    box-sizing: border-box;
    min-width: 300px;
`

const CardItem = styled.div`
    padding: 15px;
`


export default class LogIn extends React.Component {
    render() {
        return (
            <LoginCard>
                <CardItem>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />
                </CardItem>
                <CardItem>
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />
                </CardItem>
                <CardItem>
                    <Row>
                        <Col span={12}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                        <Col span={12}>
                            <a className="login-form-forgot" href="">
                            Forgot password
                            </a>
                        </Col>
                    </Row>
                    
                </CardItem>
                <CardItem>
                    <Button type="primary" block>
                        Log in
                    </Button>
                </CardItem>
                <CardItem>
                    Or <a href="">Sign Up!</a>
                </CardItem>
            </LoginCard>
        );
  }
}


