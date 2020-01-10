import querystring from 'query-string';
import {
  useHistory,
  useLocation
} from 'react-router-dom';

const identity = x => x;


/**Hook to Get/Set values in the querystring
 *
 * Merges updates with the existing querystring
 *
 * eg:
 *   const [querystring, updateQuerystring] = useQuerystring();
 *   ...
 *   <h1>{querystring.paramname}</h1> // <h1></h1>
 *
 *   updateQuerystring({paramname: 'A Value!'});
 *   ...
 *   <h1>{querystring.paramname}</h1> // <h1>A Value!</h1>
 *
 * @returns [
 *   {[String]: String},        // parsed querystring as Object
 *   ({[String]: String})=>void // function to update querystring
 * ]
 */
function useQuerystring() {
  const location = useLocation();
  const history = useHistory();
  const qs = querystring.parse(location.search);

  const update = (newValues) => {
    const newQs = Object.assign({}, qs, newValues);
    history.replace(`?${querystring.stringify(newQs)}`);
  };

  return [qs, update];
}

/**
 * Hook to Get/Set a specific querystring param
 *
 * @param param:String - query parameter name
 * @param defaultValue:any - value to return when param not set in querystring
 * @param serialize:(T)=>String - (optional) serialize to querystring param
 * @param parse:(String)=>T - (optional) parse querystring param to value (return undefined to use defaultValue)
 * @returns [
 *   T,
 *   (T)=>void
 * ]
 */
function useQuerystringParam(param, defaultValue, { serialize = identity, parse = identity } = {}) {
  const [qs, updateQs] = useQuerystring();

  const actualValue = qs[param];
  const parsedValue = parse(actualValue);
  const value = (actualValue != null && parsedValue != null)
    ? parsedValue
    : defaultValue;

  const update = (newValue) => {
    updateQs({ [param]: serialize(newValue) });
  };

  return [value, update];
}

export {
  useQuerystring,
  useQuerystringParam
};
