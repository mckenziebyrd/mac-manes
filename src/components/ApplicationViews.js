import React from 'react'
import { Route } from "react-router-dom"
import RequestsList from './Requests/RequestsList'
import Messages from './Messages/Messages'

const ApplicationViews = () => {
  return (
    <div>
        <Route path="./requests">
            <RequestsList />
        </Route>
        <Route exact path="./messages">
            <Messages />
        </Route>
    </div>
  )
}

export default ApplicationViews