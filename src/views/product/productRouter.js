import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Product from './index'

class ProductRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/product' component={Product} />
        </Switch>
      </div>
    )
  }
}

export default ProductRouter