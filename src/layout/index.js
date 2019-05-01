import React from 'react'

import NavTop from '../components/nav-top'
import NavSide from '../components/nav-side'

class Layout extends React.Component{
  render () {
    return (
      <div>
        <NavTop/>
        <NavSide/>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
