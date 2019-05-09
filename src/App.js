import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './layout/index'
import Home from './views/home'
import Bootcss from './views/bootcss'
import News from './views/news'
import Login from './views/login'
import User from './views/user'
import './assets/styles/global.scss'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' render={props => (
            <Layout>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/bootcss' component={Bootcss} />
                <Route path='/news' component={News} />
                <Route path='/user' component={User} />
              </Switch>
            </Layout>
          )} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
