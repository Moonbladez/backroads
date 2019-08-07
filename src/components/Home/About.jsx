import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us"></Title>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            ></Img>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum
            vitae alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum
            vitae alias.
          </p>
          <button className="btn-primary" type="button">
            Read More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
