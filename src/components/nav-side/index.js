import React from 'react'

class NavSide extends React.Component {
  render() {
    return (
      <div className='nav flex-column bg-dark text-light nav-pills'>
        <div className='nav-item '>
          <a className='nav-link'>
            <i className="fa fa-home"></i>
            <span>首页</span>
          </a>
        </div>
        <div className='nav-item'>
          <a className='nav-link'>
            <i className='fa fa-list'></i>
            <span>商品</span>
            <span className='fa fa-angle-down'></span>
          </a>
          <div className='nav flex-column'>
            <div className='nav-item'>
              <a className='nav-link'>商品管理</a>
            </div>
            <div className='nav-item'>
              <a className='nav-link'>品类管理</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavSide