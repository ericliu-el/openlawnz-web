import React from "react"
import { Link } from "gatsby"
import { Layout, Hero, Card, Button } from "../components"

import Access from "../images/svgs/access.svg"
import Innovation from "../images/svgs/innovation.svg"
import Fund from "../images/svgs/fund.svg"

import RepossessionPic from "../images/repossession.png"
import VolunteeringPic from "../images/volunteering.png"
import FeesPic from "../images/fees.png"
import styles from "./styles/index.module.scss"

const HomePage = () => {
  return (
    <Layout className={styles.homepage}>
      <Hero />
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.missions}>
            <h1>Our Mission</h1>
            <h5>
              OpenLaw NZ is an open-source platform that any country can copy and use for the betterment of their
              citizens.
            </h5>
            <ul>
              <li>
                <Access />
                <p>Improve access to justive and education for all New Zealanders</p>
              </li>
              <li>
                <Innovation />
                <p>Spur innovation with a freely available relational database</p>
              </li>
              <li>
                <Fund />
                <p>Fund future development by providing services using the OpenLaw NZ platform</p>
              </li>
            </ul>
          </div>

          <div className={styles.explore}>
            <h1>Explore Openlaw NZ</h1>
            <div className={styles.cards}>
              <Card.Small title="How to Use Openlaw" imgSrc={FeesPic} />
              <Card.Small title="Get Legal Knowledge" imgSrc={RepossessionPic} />
              <Card.Small title="Become a Part of Us" imgSrc={VolunteeringPic} />
            </div>
          </div>

          <div className={styles.contact}>
            <h1>Contact Us</h1>
            <h5>We'd love to hear feedback, and things you have done with the platform.</h5>
            <Button>Get In Touch</Button>
          </div>
        </div>

        <div className={styles.right}>
          <h1>Latest News</h1>
          <ul>
            <li>
              <Link to="/">02/09/2020 OpenLaw NZ Receives Law Foundation Grant</Link>
            </li>
            <li>
              <Link to="/">02/09/2020 OpenLaw NZ launches new website</Link>
            </li>
            <li>
              <Link to="/">02/09/2020 Amazing response to call for volunteers</Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
