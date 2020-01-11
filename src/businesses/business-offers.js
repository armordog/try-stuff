import React from 'react';
import { useParams } from 'react-router';


function BusinessOffers() {
  const { businessId } = useParams();
  return (
    <h2>Offers for {businessId}</h2>
  );
}

export default BusinessOffers;
