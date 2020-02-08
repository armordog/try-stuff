import Route from './utils/route';

const routes = {
  businesses: new Route({ path: '/businesses' }),
  offers: new Route({ path: '/offers' }),
  business: new Route({ path: '/businesses/:businessId' }),
  flags: new Route({ path: '/flags'}),
  stepper: new Route({ path: '/stepper'})
};

export default routes;
