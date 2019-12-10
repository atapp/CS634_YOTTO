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
                <strong>Learn Bootstrap 4 with MDB</strong>
              </h1>

              <p>
                <strong>Best free guide of responsive web design</strong>
              </p>

              <p className="mb-4 d-none d-md-block">
                <strong>
                  The most comprehensive tutorial for the Bootstrap 4. Loved by
                  over 500 000 users. Video and written versions available.
                  Create your own, stunning website.
                </strong>
              </p>

              <a
                target="_blank"
                href="https://mdbootstrap.com/education/bootstrap/"
                className="btn btn-outline-white btn-lg"
              >
                Start free tutorial
                <i className="fas fa-graduation-cap ml-2"></i>
              </a>
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
