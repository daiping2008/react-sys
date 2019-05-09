import React from 'react'

import NavTop from '../components/nav-top'
import NavSide from '../components/nav-side'

class Layout extends React.Component{
  render () {
    return (
      <div className=''>

        <NavTop/>

        <NavSide/>

        <div className='mt-2 ml-3'>{this.props.children}</div>

      </div>
    )
  }
}

export default Layout
