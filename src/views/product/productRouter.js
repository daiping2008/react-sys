import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Product from './index'
import ProductSave from './index/save'

class ProductRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/product/index' component={Product} />
          <Redirect exact to='/product/index' from='/product' />
          <Route path='/product/save' component={ProductSave} />
        </Switch>
      </div>
    )
  }
}

export default ProductRouter