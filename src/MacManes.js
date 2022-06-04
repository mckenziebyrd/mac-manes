import React from 'react'
import ApplicationViews from './components/ApplicationViews.js'
import NavBar from './components/NavBar/NavBar.js'
import RequestForm from './components/Requests/RequestForm.js'
import RequestsList from './components/Requests/RequestsList.js'
import Messages from './components/Messages/Messages.js'
import RequestFormButton from './components/Requests/RequestFormButton.js'
import HomePage from './components/HomePage.js'
import MessageForm from './components/Messages/MessageForm.js'

import { Route, Redirect } from "react-router-dom";
import { Login } from './components/Auth/Login.js'
import { Register } from './components/Auth/Register.js'


export const MacManes = () => {
  return (
    <div className='macManes'>
     <Route
      render={() => {
        if (localStorage.getItem("manes_user")) {
          return (
            <>
              <NavBar />
              <Redirect to="/home" /> 
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
      </div>
  )
}

//  <NavBar />
//       <HomePage />
//       <MessageForm />
//       <ApplicationViews />