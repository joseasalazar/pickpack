import React from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { Button } from "react-bootstrap";

export const Logout = () => {
  const client = useApolloClient();
  return (
    <Button
      onClick={() => {
        client.writeData({ data: { isLoggedIn: false, userType: "" } });
        localStorage.removeItem("token");
        localStorage.removeItem("role");
      }}
    >
      Log Out
    </Button>
  );
};
