import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

//Setup for graphql
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { resolvers, typeDefs } from "./api/resolvers";
import { persistCache } from "apollo-cache-persist";



const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://u2mqz07q4e.execute-api.us-east-1.amazonaws.com/dev/graphql"
});

const client = new ApolloClient({
  cache,
  link,
  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : ""
      }
    });
  },
  typeDefs,
  resolvers
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
    cartItems: [],
    userType: localStorage.getItem("role") ? localStorage.getItem("role") : null

  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
