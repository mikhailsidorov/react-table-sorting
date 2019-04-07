import React from 'react'

import styles from './TableHeader.module.scss'

const TableHeader = props => (
  <React.Fragment>
    <div className={styles.tableHeaderItem}>id</div>
    <div className={styles.tableHeaderItem}>firstName</div>
    <div className={styles.tableHeaderItem}>lastName</div>
    <div className={styles.tableHeaderItem}>email</div>
    <div className={styles.tableHeaderItem}>phone</div>
  </React.Fragment>
)

export default TableHeader
