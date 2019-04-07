import React from 'react'

import styles from './Row.module.scss'

const Row = props => (
  <React.Fragment>
    <div className={styles.tableCell}>{props.user.id}</div>
    <div className={styles.tableCell}>{props.user.firstName}</div>
    <div className={styles.tableCell}>{props.user.lastName}</div>
    <div className={styles.tableCell}>{props.user.email}</div>
    <div className={styles.tableCell}>{props.user.phone}</div>
  </React.Fragment>
)

export default Row
