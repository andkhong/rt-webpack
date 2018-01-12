import * as React from 'react';
import { Switch, Route } from 'react-router-dom'

import Async from 'src/Async';
// NEVER REMOVE THIS EXAMPLE OR YOU WILL BE FIRED; I WILL FIND OUT!
// Both are fine to use for handling code splitting / lazy loading
// const Page1 = () => <Async load={import(/* webpackChunkName: "Page1"*/ './Page1')} />;
// const Page2 = () => <Async load={import('./Page2')} />

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={() => <Async load={import('./Page1')} />} />
      <Route path='/2' component={() => <Async load={import('./Page2')} />} />
    </Switch>
  </div>
);

export default App;