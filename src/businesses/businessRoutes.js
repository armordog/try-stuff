import Route from '../utils/route';

const routes = {
  businessOffers: new Route({ path: '/businesses/:businessId/offers' }),
  businessStats: new Route({ path: '/businesses/:businessId/stats' })
};

export default routes;
