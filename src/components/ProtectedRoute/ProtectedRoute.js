import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Route>
      {
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  )
}

export default ProtectedRoute;