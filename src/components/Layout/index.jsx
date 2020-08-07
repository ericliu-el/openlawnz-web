import React from "react"
import Header from "../Header"
import Footer from "../Footer"

import styles from "./layout.module.scss"

const Layout = ({ children, className }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
