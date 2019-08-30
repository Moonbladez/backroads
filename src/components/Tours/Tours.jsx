import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const getTours = graphql`
  {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Tours = () => {
  const { tours } = useStaticQuery(getTours)
  return <TourList tours={tours}></TourList>
}

export default Tours
