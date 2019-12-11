import React from "react"
import { Router } from "@reach/router"
import LoggedInLayout from "../components/LoggedInLayout"
import Profile from "./profile"
import Main from "./main"
import PrivateRoute from "./components/PrivateRoute"
import Login from "./login"

const App = () => {
  return (
    <LoggedInLayout>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PublicRoute path="/app">
          <PrivateRoute path="/" component={Main} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </LoggedInLayout>
  )
}
function PublicRoute(props) {
  return <div>{props.children}</div>
}

export default App
