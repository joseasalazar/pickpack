import React from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { LoginForm } from "../components/LoginForm";
import { LOGIN_USER } from "../../api/mutations";

export default function LogIn() {
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem("token", login.token);
      localStorage.setItem("role", login.user.type);
      client.writeData({
        data: { isLoggedIn: true, userType: login.user.type }
      });
    }
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>An error occurred</p>;

  return <LoginForm login={login} />;
}

