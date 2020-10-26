import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/Info'
import LatestProducts from '../components/Home/ProductHighlights'
import Reviews from '../components/Review/Review'

const IndexPage = ({ data }) => (
  < Layout >
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Printful Demo"
      styleClass="default-background"
    />
    <Info />
    {/* <LatestProducts /> */}
    <Reviews />
  </Layout >
);

export const query = graphql`
{
  img:file(relativePath:{
    eq:"default-bg.jpg"
  }){
    childImageSharp{
      fluid(quality:100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
