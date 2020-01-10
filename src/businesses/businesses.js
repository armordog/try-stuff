import React from 'react';
import { Link } from 'react-router-dom';
import { useQuerystringParam } from '../utils/useQuerystring';

function Businesses() {
  const [searchParam, setSearchParam] = useQuerystringParam('search', '');
  const [limitParam, setLimitParam] = useQuerystringParam(
    'limit',
    5,
    {
      parse: x => {
        const int = parseInt(x, 10);
        if (isNaN(int)) return undefined; // default
        return int < 0 ? undefined : int;
      },
      serialize: x => String(Math.max(x || 0, 0))
    }
  );

  const range = new Array(limitParam).fill(undefined);

  const updateSearch = (event) => {
    setSearchParam(event.target.value);
  };

  const updateLimit = (event) => {
    setLimitParam(event.target.value);
  };

  return (
    <>
      <h1>Businesses</h1>
      <label>
        Search
        <input type='text' value={searchParam} onChange={updateSearch}/>
      </label>
      <label>
        Range
        <input type='number' value={limitParam} onChange={updateLimit}/>
      </label>
      <ul>
        {range.map((_, index) => (
          <li key={index}>
            <Link to={`/businesses/${searchParam}${index}`}>{`${searchParam}${index}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Businesses;
