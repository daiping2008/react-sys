import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './layout/index'
import Home from './views/home'
import Bootcss from './views/bootcss'
import './assets/styles/global.scss'
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Layout> */}
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/bootcss' component={Bootcss} />
          </Switch>
        {/* </Layout> */}
      </Router>
    </div>
  );
}

export default App;
