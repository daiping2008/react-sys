import React from 'react'
import RcPagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'
class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
      defaultPageSize: 10,
    }
  }

  handleChange(pageNum) {
    this.setState({current: pageNum})
    this.props.onChange(pageNum)
  }

  render () {
    const {total, pageNum} = this.props
    return (
      <div>
        <RcPagination
          defaultCurrent={1}
          current={pageNum} 
          total={total}
          pageSize={10}
          onChange={(pageNum) => this.handleChange(pageNum)}
        />
      </div>
    )
  }
}

export default Pagination