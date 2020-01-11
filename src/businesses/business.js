import React from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useParams
} from 'react-router-dom';
import useRouteBuilder from '../utils/useRouteBuilder';
import BusinessOffers from './business-offers';
import BusinessStats from './business-stats';
import businessRoutes from './businessRoutes';

function Business() {
  const { businessId } = useParams();
  const businessOffersRouteBuilder = useRouteBuilder(businessRoutes.businessOffers);
  const businessStatsRouteBuilder = useRouteBuilder(businessRoutes.businessStats);
  return (
    <>
      <h1>Business {businessId}</h1>
      <ul>
        <li>
          <NavLink to={businessOffersRouteBuilder()} replace>Offers</NavLink>
        </li>
        <li>
          <NavLink to={businessStatsRouteBuilder()} replace>Stats</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={businessRoutes.businessOffers.path}>
          <BusinessOffers/>
        </Route>
        <Route path={businessRoutes.businessStats.path}>
          <BusinessStats/>
        </Route>
        <Route>
          <p><i>Please select a tab</i></p>
          <p><small>This is here so we have a dynamic landing point.</small></p>
          <p><small>We could easily put a Redirect to <code>businessOffersRouteBuilder()</code></small></p>
        </Route>
      </Switch>
    </>
  );
}

export default Business;
