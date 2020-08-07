import React from "react"

import HeroBg from "../../images/svgs/hero.svg"
import styles from "./hero.module.scss"

const Hero = () => (
  <div className={styles.hero}>
    <HeroBg />
    <h1>A new, free legal research platform for New Zealand.</h1>
  </div>
)

export default Hero
