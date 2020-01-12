import React from 'react';
import { useParams } from 'react-router';
import { useQuerystringParam, transport } from '../utils/useQuerystring';

function getOffers(enabled) {
  const numOffers = Math.ceil(Math.random() * 6);
  const offers = [];
  for (let x = 0; x < numOffers; x++) {
    offers.push({
      id: x,
      headline: `Fake Offer ${x}`,
      enabled
    });
  }
  return offers;
}

function BusinessOffers() {
  const { businessId } = useParams();
  const [enabled, setEnabled] = useQuerystringParam(
    'enabled',
    true,
    {
      parse: transport.boolean.parse,
      serialize: transport.boolean.serialize,
      squash: true
    }
  );
  const offers = getOffers(enabled);
  return (
    <>
      <h2>Offers for {businessId}</h2>
      <button type='button' onClick={() => setEnabled(true)} className={enabled ? 'active' : ''}>Enabled</button>
      <button type='button' onClick={() => setEnabled(false)} className={!enabled ? 'active' : ''}>Disabled</button>
      <ul>
        {offers.map(o => (
          <li key={o.id}>{o.headline} {o.enabled ? '' : <i>DISABLED</i>}</li>
        ))}
      </ul>
    </>
  );
}

export default BusinessOffers;
