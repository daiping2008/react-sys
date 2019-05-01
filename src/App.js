import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './layout/index'
import Home from './views/home'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
