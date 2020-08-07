import React from "react"

const ArrowDown = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" stroke="#393939" strokeWidth={2} fill="none" {...props}>
    <path d="M3 7l9 9 9-9" />
  </svg>
)

const ArrowUp = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" stroke="#393939" strokeWidth={2} fill="none" {...props}>
    <path d="M22 17L12 7L2 17" />
  </svg>
)

const ArrowRight = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" stroke="#393939" strokeWidth={2} fill="none" {...props}>
    <path d="M7 22L17 12L7 2" />
  </svg>
)

const ArrowLeft = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" stroke="#393939" strokeWidth={2} fill="none" {...props}>
    <path d="M17 2L7 12L17 22" />
  </svg>
)

export { ArrowDown, ArrowUp, ArrowRight, ArrowLeft }
