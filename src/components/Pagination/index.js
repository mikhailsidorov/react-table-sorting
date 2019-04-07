import React from 'react'

import styles from './Pagination.module.scss'
import PaginationButton from './PaginationButton'

const Pagination = props => (
  <div className={styles.pagination}>
    <PaginationButton type="previous" />
    <PaginationButton value={1} active />
    <PaginationButton value={2} />
    <PaginationButton type="next" />
  </div>
)

export default Pagination
