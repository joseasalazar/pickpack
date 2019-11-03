import React from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { SignUpForm } from "../components/SignUpForm";
import { SIGNUP_USER } from "../../api/mutations";
import { Spinner } from "react-bootstrap";


export default function SignUp() {
  const client = useApolloClient();
  const [signup, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted({ signup }) {
      localStorage.setItem("token", signup.token);
      localStorage.setItem("role", signup.user.type);
      client.writeData({
        data: { isLoggedIn: true, userType: signup.user.type }
      });
    }
  });

  if (loading) return <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
  if (error) {
    console.log(error)
    return <p>An error ocurred</p>;
  }
  

  return <SignUpForm signup={signup} />;
}