import React from "react"

import HeroBg from "../../images/hero.png"
import styles from "./hero.module.scss"

const Hero = () => (
  <div className={styles.hero}>
    <img src={HeroBg} alt="OpenLaw NZ" />
    <h1>A new, free legal research platform for New Zealand.</h1>
  </div>
)

export default Hero
