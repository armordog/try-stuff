import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import {
  transport,
  useQuerystringParam
} from '../utils/useQuerystring';
import useRouteBuilder from '../utils/useRouteBuilder';


function Businesses() {
  const [searchParam, setSearchParam] = useQuerystringParam('search', '', {squash: true});
  const [limitParam, setLimitParam] = useQuerystringParam(
    'limit',
    5,
    {
      parse: transport.naturalNumber.parse,
      serialize: transport.naturalNumber.serialize
    }
  );

  const range = new Array(limitParam).fill(undefined);

  const updateSearch = event => setSearchParam(event.target.value);

  const updateLimit = event => setLimitParam(
    // Even though we don't _need_ to parseInt here,
    // updateLimit is technically expecting a number
    parseInt(event.target.value, 10)
  );

  const businessRouteBuilder = useRouteBuilder(routes.business);

  return (
    <>
      <h1>Businesses</h1>
      <div>
        <label>
          Search
          <input type='text' value={searchParam} onChange={updateSearch}/>
        </label>
      </div>

      <div>
        <label>
          Range
          <input type='number' value={limitParam} onChange={updateLimit}/>
        </label>
      </div>
      <ul>
        {range.map((_, index) => (
          <li key={index}>
            <Link to={() => businessRouteBuilder({ businessId: `${searchParam}${index}` }, {preserveQuerystring: true})}>
              {`${searchParam}${index}`}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Businesses;
