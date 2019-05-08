import React from 'react'
import {Link} from 'react-router-dom'
class NavTop extends React.Component {
  render() {
    return (
      <div className='navbar fixed-top bg-dark text-light header'>
        <Link to='/' className='navbar-brand'>React</Link>
        <div className='dropdown btn-group' data-toggle='dropdown'>
          <Link to='/login'>登录</Link>
          <a href='#' className='dropdown-toggle' data-toggle='dropdown' data-offset='10'><span className='sr-only'>登录</span></a>
          <div className='dropdown-menu dropdown-menu-right'>
            <div className=''>退出登录</div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavTop