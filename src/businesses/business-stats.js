import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useRouteBuilder from '../utils/useRouteBuilder';
import routes from '../routes';


function BusinessStats() {
  const { businessId } = useParams();
  const businessRouteBuilder = useRouteBuilder(routes.business);
  return (
    <>
      <h2>Stats for {businessId}</h2>
      <Link to={businessRouteBuilder()} replace>Up one level</Link>
    </>
  );
}

export default BusinessStats;
