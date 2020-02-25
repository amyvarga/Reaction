import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Article from './Article';
import Home from './Home';
import Routes from '../routes';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/article">Article</Link></li>
      </ul>
      <Switch>
        {Routes.map(route =>
          <Route key={route.path} {...route} />
        )}
      </Switch>
    </div>
  )
}

export default App;