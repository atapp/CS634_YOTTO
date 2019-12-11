import React from "react"
import HomeImage from "../images/BAckground.png"
import Button_Background from "../images/Button_Background.png"
import { Carousel } from "react-bootstrap"
import { Link } from "gatsby"

const HomePageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="view align-items-center flex-column p-4"
          style={{
            backgroundImage: `url(${HomeImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <div className="md-flex h-100 align-items-center justify-content-center">
            <div className="text-center white-text mx-5 wow fadeIn">
              <h1 className="mb-4">
                <strong>
                  Join our community, where music brings us closer and talent
                  makes us bigger
                </strong>
              </h1>
            </div>
          </div>
        </div>
        <Carousel.Caption>
          <Link to="/app">
            <img src={Button_Background} alt="Login Button" />
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomePageCarousel
