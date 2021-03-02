import React from "react"

import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <AniLink to="/" cover top="exit" direction="left" duration={1}>
      <div className="link--general link--takiri">Takiri <span>Take me home</span></div>
    </AniLink>
    </div>
  </Layout>
)

export default SecondPage
