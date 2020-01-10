import querystring from 'query-string';
import {
  useHistory,
  useLocation
} from 'react-router-dom';

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

function useQuerystringParam(param, defaultValue) {
  const [qs, updateQs] = useQuerystring();

  const value = (qs[param] != null)
    ? qs[param]
    : defaultValue;

  const update = (newValue) => {
    updateQs({ [param]: newValue });
  };

  return [value, update];
}

export { useQuerystring, useQuerystringParam };
