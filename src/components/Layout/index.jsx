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

// for common 2 columns layout
// <Layout.Twos>
//   <Layout.Left>...</Layout.Left>
//   <Layout.Right>...</Layout.Right>
// </Layout.Twos>
const Twos = ({ children }) => <div className={styles.layoutTwos}>{children}</div>
const Left = ({ children }) => <div className={styles.layoutLeft}>{children}</div>
const Right = ({ children }) => <div className={styles.layoutRight}>{children}</div>

Layout.Twos = Twos
Layout.Left = Left
Layout.Right = Right

export default Layout
