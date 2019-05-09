import React from 'react'

import UserModal from '../../server/user'
const userModal = new UserModal()

class User extends React.Component {

  componentDidMount() {
    userModal.getUserList()
  }

  render() {
    return (
      <div>1</div>
    )
  }
}

export default User