export const HOME = 'home';
export const MARKET = 'market';
export const PLACES = 'places';
export const COMMUNITY = 'community';

export const PAGE = 'page';
export const POST = 'post';

export default {
  [HOME]: '/',
  [MARKET]: {
    en: '/market/**',
    es: '/mercado/**',
  },
  [PLACES]: {
    en: '/places/**',
    es: '/lugares/**',
  },
  [COMMUNITY]: {
    en: '/community/**',
    es: '/comunidad/**',
  },
};
