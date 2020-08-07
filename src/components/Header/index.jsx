import React from "react"
import { Link } from "gatsby"

import Logo from "../../images/svgs/logo.svg"
import Icon from "../Icon"
import Search from "../Search"

import styles from "./header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">
          <Logo />
        </Link>

        <div className={styles.items}>
          <Icon name="hamburger" fillWhite />
          <Link to="/">Our Mission</Link>
          <Link to="/">Get Involved</Link>
          <Link to="/">Get Empowered</Link>
        </div>
      </nav>

      <Search />
    </header>
  )
}

export default Header
