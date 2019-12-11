import React from "react"

import { useIdentityContext } from "react-netlify-identity-widget"
import {Navbar, FormControl, Form, Button, Nav, NavDropdown } from "react-bootstrap"
import { Logo } from "../components/Logo"

function Main() {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const { user } = useIdentityContext()
  const [err, setErr] = React.useState("")

  const handleClick = e => {
    e.preventDefault()
    setLoading(true)
    fetch("/.netlify/functions/auth-hello", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token.access_token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setData(json)
      })
      .catch(err => {
        if (window.location.origin === "http://localhost:8000")
          setErr(
            'your origin is "http://localhost:8000". You are likely not using Netlify Dev so the functions server isnt running. Please read the docs, use Netlify Dev, and go to http://localhost:8888'
          )
        else setErr(err)
        throw err
      })
  }

  return (
    <>
    <style>{"body { background-color: black; }"}</style>
      <Navbar bsPrefix="navbar-landing">
        <Navbar.Brand href="#home">
          <div style={{ maxWidth: "300px", marginLeft: "10px" }}>
            <Logo />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <h1>Your Main App</h1>
      <ul>
        <li>API: {user.api && user.api.apiURL}</li>
        <li>ID: {user.id}</li>
      </ul>
      <hr />

      <button onClick={handleClick}>
        {loading ? "Loading..." : "Call Lambda Function"}
      </button>
      {err && <pre>{JSON.stringify(err, null, 2)}</pre>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default Main
