import React from "react";
// import 'antd/dist/antd.css';
import styled from 'styled-components'
// import {Typography, Input, Button} from 'antd';

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
// const { Title } = Typography;

export default class SignUp extends React.Component {
  render() {
    return (
      <LoginCard>
        <div>
          {/* <Title level={2}>Register</Title> */}
        </div>
      <CardItem>
          {/* <Input
              placeholder="First Name"
          /> */}
      </CardItem>
      <CardItem>
          {/* <Input
              placeholder="Last Name"
          /> */}
      </CardItem>
      <CardItem>
          {/* <Input
            type="email"
            placeholder="E-mail"
          /> */}
      </CardItem>
      <CardItem>
          {/* <Input
              type="password"
              placeholder="Password"
          /> */}
      </CardItem>
      <CardItem>
          {/* <Input
              type="password"
              placeholder="Confirm Password"
          /> */}
      </CardItem>

      <CardItem>
        {/* <Button type="primary" htmlType="submit" className="login-form-button">
        Sign Up
        </Button> */}
      </CardItem>
  </LoginCard>
    );
  }
}