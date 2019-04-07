import React from 'react'

import Row from './Row'

const Rows = props => {
  const rows = props.users.map((user, i) => <Row key={user.id} user={user} />)
  return <React.Fragment>{rows}</React.Fragment>
}

export default Rows
