import routes, {HOME, MARKET, PLACES, COMMUNITY} from './routes';
import Home from '../components/pages/Home';
import MarketSearch from '../components/pages/MarketSearch';
import LocationsMap from '../components/pages/LocationsMap';
import Organizations from '../components/pages/Organizations';

export default [
  {
    paths: routes[HOME],
    component: Home,
    exact: true,
    routes: [
      {
        paths: routes[MARKET],
        component: MarketSearch,
      },
      {
        paths: routes[PLACES],
        component: LocationsMap,
      },
      {
        paths: routes[COMMUNITY],
        component: Organizations,
      },
    ],
  },
];
