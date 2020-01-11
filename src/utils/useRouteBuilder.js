import { useParams } from 'react-router-dom';

const useRouteBuilder = (route) => {
  const oldParams = useParams();

  return (params) => {
    return route.generate(Object.assign({}, oldParams, params));
  };
};

export default useRouteBuilder;
