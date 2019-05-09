import React from 'react'

import UserModal from '../../server/user'

import PageTitle from '../../components/page-title'
import TableList from '../../components/table-list'
import Pagination from '../../components/pagination'
const userModal = new UserModal()

class User extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      pageNum:1,
      total: 0,
    }
  }

  componentDidMount() {
    this.loadUserList()
  }

  loadUserList() {
    const {pageNum} = this.state
    userModal.getUserList(pageNum).then(res=>{
      this.setState(res)
    })
  }

  renderTableBody() {
    const {list} = this.state

    return list.map(v => <tr key={v.id}>
      <td>{v.id}</td>
      <td>{v.username}</td>
      <td>{v.email}</td>
      <td>{v.phone}</td>
      <td>{v.createTime}</td>
    </tr>)
  }

  handleChange(pageNum) {
    this.setState({
      pageNum
    }, () => {
      this.loadUserList()
    })
  }

  render() {
    const {total, pageNum} = this.state
    return (
      <div className='wrapper'>
        <PageTitle title='用户管理' />
        <TableList tableHeads={['ID', '用户名', '邮箱', '电话', '注册时间']}>
          {this.renderTableBody()}
        </TableList>
        <Pagination total={total} pageNum={pageNum} onChange={(pageNum => this.handleChange(pageNum))} />
      </div>
    )
  }
}

export default User