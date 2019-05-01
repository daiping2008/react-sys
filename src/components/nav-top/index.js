import React from 'react'

class NavTop extends React.Component {
  render() {
    return (
      <div className='navbar navbar-default bg-dark fixed-top'>
        <span className='navbar-brand text-primary'>黑兔纸</span>
        <ul className='nav justify-content-end'>
          <li className='nav-item dropdown'>
            <a className='nav-link active dropdown' href='#'>Susan</a>
            <div className='dropdown-menu '>
              <a className='dropdown-item'>退出登录</a>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavTop