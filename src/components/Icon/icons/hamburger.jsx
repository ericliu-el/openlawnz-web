import React from "react"

const Hamburger = (props) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3.538H0V1h24v2.538zm0 9.308H0v-2.538h24v2.538zM24 23H0v-2.538h24V23z"
      />
    </svg>
  )
}

export default Hamburger
