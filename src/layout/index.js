import React from 'react'

import NavTop from '../components/nav-top'
import NavSide from '../components/nav-side'

class Layout extends React.Component{
  render () {
    return (
      <div className='container-fluid container-index'>
        <div className='row'>
          <div className='col'>
            <NavTop/>
          </div>
        </div>
        <div className='row mt-5 no-gutters'>
          <div className='col-2'>
            <NavSide/>
          </div>
          <div className='col-10'>
          {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
