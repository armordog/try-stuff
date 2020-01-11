import { useParams, useLocation } from 'react-router-dom';

const useRouteBuilder = (route) => {
  const oldParams = useParams();
  const location = useLocation();

  return (params, { preserveQuerystring = false } = {}) => {
    const baseRoute = route.generate(Object.assign({}, oldParams, params));
    return preserveQuerystring
      ? `${baseRoute}${location.search}`
      : baseRoute;
  };
};

export default useRouteBuilder;
