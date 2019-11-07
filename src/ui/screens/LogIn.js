import React from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { LoginForm } from "../components/LoginForm";
import { LOGIN_USER } from "../../api/mutations";
import Swal from "sweetalert2";

export default function LogIn() {
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      window.location.replace("/");
      localStorage.setItem("token", login.token);
      localStorage.setItem("role", login.user.type);
      client.writeData({
        data: { isLoggedIn: true, userType: login.user.type }
      });
    }
  });

  if (loading) {
    Swal.fire({
      position: "center",
      type: "success",
      title: "Cargando...",
      showConfirmButton: false,
      timer: 1500
    });
    return null;
  }
  if (error) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: error.message,
      footer: "<a href>Intente más tarde</a>"
    });
    return null;
  }

  if (loading) return <p>loading...</p>;
  if (error) return <p>An error occurred</p>;

  return <LoginForm login={login} />;
}

