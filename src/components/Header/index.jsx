import React, { useState } from "react"
import cn from "classnames"
import { Link } from "gatsby"

import Icon from "../Icon"
import Search from "../Search"
import Menu from "./menu"

import Logo from "../../images/svgs/logo.svg"

import styles from "./header.module.scss"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openItem, setOpenItem] = useState(null)

  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link to="/">
            <Logo />
          </Link>

          <div className={styles.items}>
            <Icon
              name="close"
              onClick={() => {
                setOpenMenu(false)
                setOpenItem(null)
              }}
              className={openMenu ? null : styles.hideIcon}
            />
            <Icon
              name="hamburger"
              fillWhite
              onClick={() => setOpenMenu(true)}
              className={openMenu ? styles.hideIcon : null}
            />
            <Link partiallyActive activeClassName={styles.active} to="/about">
              Our Mission
            </Link>
            <Link to="/">Get Involved</Link>
            <Link to="/">Get Empowered</Link>
          </div>
        </nav>
        <Search />
      </header>

      <div className={cn(styles.fullMenu, openMenu ? styles.show : null)}>
        <ul>
          {Menu.map(({ title, link, subMenu = [] }) =>
            link ? (
              <li key={title}>
                <Link to={link}>{title}</Link>
              </li>
            ) : (
              <li key={title} className={openItem === title ? styles.open : null}>
                <button href="#" onClick={() => (openItem === title ? setOpenItem(null) : setOpenItem(title))}>
                  <Icon name={openItem === title ? "arrowDown" : "arrowRight"} strokeSecondary strokeWidth={3} />
                  {title}
                </button>
                <ul>
                  {subMenu.map(({ title, link }) => (
                    <li key={title}>
                      <Link to={link}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  )
}

export default Header
