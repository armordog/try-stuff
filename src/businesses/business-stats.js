import React from 'react';
import { useParams } from 'react-router';


function BusinessStats() {
  const { businessId } = useParams();
  return (
    <h2>Stats for {businessId}</h2>
  );
}

export default BusinessStats;
