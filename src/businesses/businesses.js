import React from 'react';
import { Link } from 'react-router-dom';
import { useQuerystringParam } from '../utils/useQuerystring';

function Businesses() {
  const [searchParam, setSearchParam] = useQuerystringParam('search', '');
  const [limitParam, setLimitParam] = useQuerystringParam('limit', 5);

  const safeLimit = Math.max(parseInt(limitParam, 10) || 0, 0);
  const range = new Array(safeLimit).fill(undefined);

  const updateSearch = (event) => {
    const value = event.target.value;
    setSearchParam(value);
  };

  const updateLimit = (event) => {
    const value = parseInt(event.target.value, 10);
    setLimitParam(value);
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
