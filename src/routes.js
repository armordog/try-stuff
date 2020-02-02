import Route from './utils/route';

const routes = {
  businesses: new Route({ path: '/businesses' }),
  offers: new Route({ path: '/offers' }),
  business: new Route({ path: '/businesses/:businessId' }),
  flags: new Route({ path: '/flags'})
};

export default routes;
