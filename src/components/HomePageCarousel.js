import React from "react"
import HomeImage from "../images/BAckground.png"
import { Carousel, ResponsiveEmbed } from "react-bootstrap"

const HomePageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="view"
          style={{
            backgroundImage: `url(${HomeImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomePageCarousel
