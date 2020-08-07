import React from "react"

import HeroBg from "../../images/svgs/hero.svg"
import styles from "./hero.module.scss"

const Hero = () => (
  <div className={styles.hero}>
    <HeroBg />
    <p>A new, free legal research platform for New Zealand.</p>
  </div>
)

export default Hero
