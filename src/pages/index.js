import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="hunt by meowing loudly at 5am next to human slave"
      >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
    <About></About>
    <Services></Services>
  </Layout>
)
