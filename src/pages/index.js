import React from "react"

import LandingLayout from "../components/LandingLayout"
import { Container, Row, Col } from "react-bootstrap"
import HomePageCarousel from "../components/HomePageCarousel"

import Pic1 from "../images/bianca-berg-SxAw9-H7kCI-unsplash.png"
import Pic2 from "../images/jan-strecha-xp4JMDZ7_2Q-unsplash.png"
import Pic3 from "../images/laura-dewilde-Zti_Vc3G6ts-unsplash.png"

class IndexPage extends React.Component {
  render() {
    return (
      <LandingLayout>
        <Container fluid>
          <Row>
            <HomePageCarousel />
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 2 }}>
              <img src={Pic1} alt="" />
            </Col>
            <Col md={{ span: 3 }}>
              <img src={Pic2} alt="" />
            </Col>
            <Col md={{ span: 3 }}>
              <img src={Pic3} alt="" />
            </Col>
          </Row>
        </Container>
      </LandingLayout>
    )
  }
}

export default IndexPage
