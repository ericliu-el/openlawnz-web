import React from "react"

import styles from "./sideMenu.module.scss"
import { Link } from "gatsby"

const SideMenu = ({ menuData = [] }) => {
  if (menuData.length === 0) return null

  return (
    <ul className={styles.sideMenu}>
      {menuData.map(({ title, link }) => (
        <li key={title}>
          <Link activeClassName={styles.active} to={link}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SideMenu
