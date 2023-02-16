// import React from 'react';
import { Route, Redirect } from "react-router-dom";
import * as mainApi from '../../utils/MainApi';
import React, { useState, useEffect, useCallback } from 'react';


const ProtectedRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Route>
      {
        // props.loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
        isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    </Route>
  )
}

export default ProtectedRoute;