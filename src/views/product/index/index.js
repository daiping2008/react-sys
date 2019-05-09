import React from 'react'
import {Link} from 'react-router-dom'
import PageTitle from '../../../components/page-title'
import TableList from '../../../components/table-list'
import Pagination from '../../../components/pagination'
import ProductModal from '../../../server/product'
const productModal = new ProductModal()

class Product extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pageNum: 1,
      total: 0,
      list: []
    }
  }

  componentDidMount() {
    this.loadProductList()
  }

  handleChange(pageNum) {
    this.setState({
      pageNum
    }, () => this.loadProductList())
  }

  loadProductList() {
    const {pageNum} = this.state
    productModal.getProductList({pageNum}).then(res => {
      console.log(res)
      this.setState({
        list:res.list,
        total:res.total
      })
    })
  }
  renderTableBody() {
    const {list} = this.state
    console.log(list)
    return list.map(v => <tr key={v.id}>
      <td>{v.id}</td>
      <td>
        <p>{v.name}</p>
        <p>{v.subtitle}</p>
      </td>
      <td>{v.price}</td>
      <td>
        {
          v.status === 1 
          ? <div><span>在售</span><button className='btn btn-warning btn-sm ml-1'>下架</button></div>
          : <div><span>已下架</span><button className='btn btn-warning btn-sm ml-1'>上架</button></div>
        }
      </td>
      <td>
        <Link to='/' className='mr-2'>详情</Link>
        <Link to='/' >编辑</Link>
      </td>
    </tr>)
  }
  render() {
    const {pageNum, total} = this.state
    const tableHeads = ['id', '信息', '价格', '状态', '操作']
    return (
      <div className='wrapper'>
        <PageTitle title={'商品管理'}/>
        <TableList tableHeads={tableHeads}>
          {this.renderTableBody()}
        </TableList>
        <Pagination onChange={pageNum => this.handleChange(pageNum)} pageNum={pageNum} total={total} />
      </div>
    )
  }
}

export default Product