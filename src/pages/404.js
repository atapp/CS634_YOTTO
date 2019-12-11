import React from "react"
import SEO from "../components/seo"
import LandingLayout from "../components/LandingLayout"

const NotFoundPage = () => (
  <LandingLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LandingLayout>
)

export default NotFoundPage
