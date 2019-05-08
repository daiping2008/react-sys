import React from 'react'

class NavTop extends React.Component {
  render() {
    return (
      <div className='navbar row no-gutters navbar-default bg-white fixed-top top-bar p-0'>
        <div className='col-2 bg-dark'>
          <span className='navbar-brand text-primary'>黑兔纸</span>
        </div>
        <div className='col-10'>
          <ul className='nav justify-content-end'>
            <li className='nav-item dropdown'>
              <a className='nav-link active dropdown' href='#'>Susan</a>
              <div className='dropdown-menu '>
                <a className='dropdown-item'>退出登录</a>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default NavTop