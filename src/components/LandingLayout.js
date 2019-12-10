import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Row,
  FormControl,
  Button,
} from "react-bootstrap"
import Logo from "./Logo"

const LandingLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
      {children}
    </>
  )
}

export default LandingLayout
