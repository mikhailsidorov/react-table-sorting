import React from 'react'

import styles from './Table.module.scss'
import TableHeader from './TableHeader'
import Rows from './Rows'

const Table = props => (
  <div className={styles.table}>
    <TableHeader />
    <Rows users={props.users} />
  </div>
)

export default Table
