import React, { useState } from 'react'

import styles from './Layout.module.scss'
import Table from '../Table'
import Search from '../Search'
import Pagination from '../Pagination'

const Layout = props => {
  const usersData = [
    {
      id: 478,
      firstName: 'Atul',
      lastName: 'Gilby',
      email: 'AMuroski@orci.org',
      phone: '(128)556-1835',
      address: { streetAddress: '3625 Facilisis St', city: 'Mount Morris', state: 'KY', zip: '78868' },
      description:
        'amet elementum vel porta non tincidunt libero malesuada sit dolor et odio lectus at odio rutrum rutrum magna nec porttitor aenean nec sed sagittis adipiscing vestibulum dui placerat dolor amet odio magna'
    },
    {
      id: 94,
      firstName: 'Anuj',
      lastName: 'Ghormley',
      email: 'LRobertd@amet.org',
      phone: '(785)267-9840',
      address: { streetAddress: '2929 Vitae Dr', city: 'Dayton', state: 'WY', zip: '44368' },
      description:
        'non adipiscing mattis id scelerisque magna elementum vel consectetur egestas augue mattis vitae sagittis tempor tortor ac placerat aenean etiam suspendisse pulvinar dolor amet tellus velit augue turpis dui sit neque lacus'
    }
  ]
  const [itemsPerPage] = useState(50)
  const [users] = useState(usersData)

  return (
    <div className={styles.layout}>
      <Search />
      <Table users={users} />
      <Pagination itemsPerPage={itemsPerPage} />
    </div>
  )
}

export default Layout
