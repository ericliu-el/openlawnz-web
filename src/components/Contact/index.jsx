import React from "react"

import Button from "../Button"
import styles from "./contact.module.scss"

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p>We'd love to hear feedback, and things you have done with the platform.</p>
      <Button outline>Get In Touch</Button>
    </div>
  )
}

export default Contact
