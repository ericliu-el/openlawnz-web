import React from "react"

import styles from "./button.module.scss"

const Button = ({ outline, icon, small, plain, disabled, children }) => {
  const classnames = [styles.button]
  if (outline) classnames.push(styles.outline)
  if (icon) classnames.push(styles.icon)
  if (small) classnames.push(styles.small)
  if (plain) classnames.push(styles.plain)
  if (disabled) classnames.push(styles.disabled)

  return <button className={classnames.join(" ")}>{children}</button>
}

export default Button
