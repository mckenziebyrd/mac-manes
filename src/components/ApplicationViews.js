import React from 'react'
import { Route, Redirect } from "react-router-dom"
import RequestsList from './Requests/RequestsList'
import Messages from './Messages/Messages'
import RequestForm from './Requests/RequestForm'
import HomePage from './HomePage'
import MessageForm from './Messages/MessageForm'

const ApplicationViews = () => {
  return (
    <div>
        <Route exact path="./">
            <Redirect to="/home" />
        
        </Route>
        <Route  path="/home">
            <HomePage />
        </Route>
       <Route exact path="/requests/form">
            <RequestForm />
        </Route>
        <Route path="/requests">
            <RequestsList />
        </Route>
        <Route path="/messages">
            <Messages />
        </Route>
        <Route exact path="/messages-form">
            <MessageForm />
        </Route>
    </div>
  )
}

export default ApplicationViews