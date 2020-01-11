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
          <NavLink to={businessOffersRouteBuilder()}>Offers</NavLink>
        </li>
        <li>
          <NavLink to={businessStatsRouteBuilder()}>Stats</NavLink>
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
          <Redirect to={businessStatsRouteBuilder()}/>
        </Route>
      </Switch>
    </>
  );
}

export default Business;
