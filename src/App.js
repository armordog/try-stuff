import React from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import Business from './businesses/business';
import Businesses from './businesses/businesses';
import Flags from './flags/flags';
import Offers from './offers/offers';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to={routes.businesses.path}>Businesses</NavLink>
        </li>
        <li>
          <NavLink to={routes.offers.path}>Offers</NavLink>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path={routes.business.path}>
            <Business/>
          </Route>
          <Route path={routes.businesses.path}>
            <Businesses/>
          </Route>
          <Route path={routes.offers.path}>
            <Offers/>
          </Route>
          <Route path={routes.flags.path}>
            <Flags/>
          </Route>
          <Route>
            <Redirect to={routes.businesses.path}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
