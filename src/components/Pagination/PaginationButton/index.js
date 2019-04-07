import React from 'react'

import styles from './PaginationButton.module.scss'

const PaginationButton = props => {
  let className, value
  switch (props.type) {
    case 'previous':
      className = styles.paginationButtonPrevious
      value = 'Previous'
      break
    case 'next':
      className = styles.paginationButtonNext
      value = 'Next'
      break
    default:
      className = props.active ? `${styles.paginationButton} ${styles.paginationButtonActive}` : styles.paginationButton
      value = props.value
  }

  return <div className={className}>{value}</div>
}

export default PaginationButton
