import React from "react"

import styles from "./search.module.scss"

const Search = () => {
  return (
    <div className={styles.search}>
      <input placeholder="Search legal cases" />
      <button>Search</button>
    </div>
  )
}

export default Search
