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
import Offers from './offers/offers';

import routes from './routes';


const activeNavStyle = {
  textDecoration: 'underline',
  fontWeight: 'bold'
};


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink activeStyle={activeNavStyle} to={routes.businesses.path}>Businesses</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeNavStyle} to={routes.offers.path}>Offers</NavLink>
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
          <Route>
            <Redirect to={routes.businesses.path}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
