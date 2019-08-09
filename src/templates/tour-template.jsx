// individual tour detailed page

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

//destructuring
const tourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.contentfulTour

  // destructure array. Main image and rest of the images within images array saved as tourImages const
  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <SEO title={name}></SEO>
      <StyledHero img={mainImage.fluid}></StyledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, key) => {
              return (
                <Img
                  key={key}
                  fluid={item.fluid}
                  alt={"single tour"}
                  className={styles.image}
                ></Img>
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon}></FaMoneyBillWave>
              starting from £{price}
            </p>
            <p>
              <FaMap className={styles.icon}></FaMap>
              {country}
            </p>
          </div>
          <h4>Starts on: {start}</h4>
          <h4>Duration: {days} days</h4>
          <p className={styles.description}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info}></Day>
            })}
          </div>
          <AniLink fade to="/tours/" className={"btn-primary"}>
            Back to Tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
    }
  }
`

export default tourTemplate
