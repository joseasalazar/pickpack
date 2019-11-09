import React from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { LoginForm } from "../components/LoginForm";
import { LOGIN_USER } from "../../api/mutations";
import Swal from "sweetalert2";

export default function LogIn() {
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      Swal.close();
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
      title: "Cargando...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    return <LoginForm />;
  }
  if (error) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: error.message,
      footer: "<p>Intente más tarde</p>"
    });
    return <LoginForm />;
  }

  return <LoginForm login={login} />;
}
