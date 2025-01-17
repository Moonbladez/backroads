import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

const error = () => {
  return (
    <Layout>
      <SEO title="404: Error"></SEO>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink to="/" className="btn-white">
            Back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
