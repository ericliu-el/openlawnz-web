import React from "react"

import FoundatioinLogo from "../../images/the-Law-Foundation.png"

import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Contact Us</p>
        <p>enquiries@openlaw.nz</p>
        <p>OpenLaw NZ | Registered NZ Charity</p>
      </div>
      <div className={styles.supporter}>
        <p>Supported by</p>
        <img src={FoundatioinLogo} width="100" alt="The Law Foundation" />
      </div>
    </footer>
  )
}

export default Footer
