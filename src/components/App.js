import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Article from './Article';
import Home from './Home';

const routes = [
  {
    path: '/article',
    component: Article,
    exact: true
  },
  {
    path: '/',
    component: Home,
    exact: true
  }
];


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/article">Article</Link></li>
        </ul>
        <Switch>

          {routes.map(route =>
            <Route key={route.path} {...route} />
          )}
        </Switch>
      </div>
    </Router>
  )
}

export default App;