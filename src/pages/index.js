import React from "react"

import LandingLayout from "../components/LandingLayout"
import { Container, Row } from "react-bootstrap"
import HomePageCarousel from "../components/HomePageCarousel"

class IndexPage extends React.Component {
  state = { loading: false, msg: null }
  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/token-hider")
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.message }))
  }

  render() {
    const { loading, msg } = this.state
    return (
      <LandingLayout>
        <Container fluid>
          <Row>
            <HomePageCarousel />
          </Row>
        </Container>
      </LandingLayout>
    )
  }
}

export default IndexPage
