import React from 'react';
import { useParams } from 'react-router-dom';

function Business() {
  const { businessId } = useParams();
  return (
    <h1>Business {businessId}</h1>
  );
}


export default Business;
