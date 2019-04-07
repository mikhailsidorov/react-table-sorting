import React from 'react'

import styles from './Search.module.scss'

const Search = props => (
  <div className={styles.search}>
    <label className={styles.searchLabel}>
      Найти
      <input className={styles.searchInput} />
    </label>
    <button className={styles.searchButton}>Найти</button>
  </div>
)

export default Search
