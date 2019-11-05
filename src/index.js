import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";



import "bootstrap/dist/css/bootstrap.min.css";


//Setup for graphql
import { ApolloProvider } from "@apollo/react-hooks";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from "apollo-boost";
import { resolvers, typeDefs } from "./api/resolvers";



const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://u2mqz07q4e.execute-api.us-east-1.amazonaws.com/dev/graphql"
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem("token");

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : ""
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
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
