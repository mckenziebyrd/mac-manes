import React from 'react'
import { Route } from "react-router-dom"
import RequestsList from './Requests/RequestsList'
import Messages from './Messages/Messages'
import RequestForm from './Requests/RequestForm'

const ApplicationViews = () => {
  return (
    <div>
       <Route path="">
            <RequestForm />
        </Route>
        <Route path="/requests">
            <RequestsList />
        </Route>
        <Route path="/messages">
            <Messages />
        </Route>
    </div>
  )
}

export default ApplicationViews