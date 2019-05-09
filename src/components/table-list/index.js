import React from 'react'

class TableList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFirstLoad: true
    }
  }

  componentWillReceiveProps(){
    this.setState({isFirstLoad: false})
  }
  renderTableHead() {
    const {tableHeads} = this.props

    return <tr>
      {tableHeads.map((v, idx) => <th key={idx}>{v}</th>)}
    </tr>
  }
  render() {
    const {tableHeads} = this.props
    const {isFirstLoad} = this.state
    const tableBody = this.props.children

    let info = ''
    if (isFirstLoad) {
      info = <tr><td colSpan={tableHeads.length} className='text-center'>加载中...</td></tr>
    }
    else {
      if (0 === tableBody.length) info = <tr><td colSpan={tableHeads.length} className='text-center'>暂无数据</td></tr>
      else info = tableBody
    }
    
    return (
      <div>
        <table className='table table-striped table-bordered'>
          <thead>{this.renderTableHead()}</thead>
          <tbody>{info}</tbody>
        </table>
      </div>
    )
  }
}

export default TableList