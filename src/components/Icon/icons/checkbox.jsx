import React from "react"

const Checkbox = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" stroke="#000" strokeWidth={2} fill="#ffffff" {...props}>
    <rect x={3} y={3} width={18} height={18} rx={1} />
  </svg>
)

const CheckboxChecked = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x={3} y={3} width={18} height={18} rx={1} fill="#fff" stroke="#000" strokeWidth={2} />
    <path d="M5.5 11.5l5 5 7.5-10" stroke="#A36633" strokeWidth={3} />
  </svg>
)

export { Checkbox, CheckboxChecked }
