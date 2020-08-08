import React from "react"
import * as Icons from "./icons"

import styles from "./icon.module.scss"

const Icon = ({
  name,
  small,
  medium,
  strokeWhite,
  strokeBlack,
  strokeSecondary,
  fillWhite,
  fillBlack,
  fillSedondary,
  className = "",
  ...props
}) => {
  const iconsMap = {
    hamburger: Icons.Hamburger,
    arrowDown: Icons.ArrowDown,
    arrowUp: Icons.ArrowUp,
    arrowLeft: Icons.ArrowLeft,
    arrowRight: Icons.ArrowRight,
    open: Icons.Open,
    close: Icons.Close,
    minus: Icons.Minus,
    question: Icons.Question,
    restart: Icons.Restart,
    more: Icons.More,
    search: Icons.Search,
    checkbox: Icons.Checkbox,
    checkboxChecked: Icons.CheckboxChecked,
  }

  const I = iconsMap[name]

  const classnames = [styles.icon]
  if (small) classnames.push(styles.small)
  if (medium) classnames.push(styles.medium)
  if (strokeBlack) classnames.push(styles.strokeBlack)
  if (strokeSecondary) classnames.push(styles.strokeSecondary)
  if (strokeWhite) classnames.push(styles.strokeWhite)
  if (fillBlack) classnames.push(styles.fillBlack)
  if (fillSedondary) classnames.push(styles.fillSedondary)
  if (fillWhite) classnames.push(styles.fillWhite)
  if (className) classnames.push(className)

  return I ? <I {...props} className={classnames.join(" ")} /> : null
}

export default Icon
