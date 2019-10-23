import React, { Component } from "react";
import { USER_TYPE } from "../api/queries";
import { useQuery } from "@apollo/react-hooks";

const roles = {
  admin: "sSc3sSkWVAcnAFA6nf/N6A==",
  customer: "/eCXmXakLrDc8BHabm+gAw==",
  provider: "yewblyw4X+tPevioSPgGAA=="
};
export function RoleManager(props) {
  const { data } = useQuery(USER_TYPE);

  if (roles[props.role] === data.userType) {
    return props.children;
  } else {
    return <div></div>;
  }
}
