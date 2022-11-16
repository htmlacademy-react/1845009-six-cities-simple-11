export enum AppRoute {
  Login = '/login',
  Root = '/',
  Room = ':id',
  Offers = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout'
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const cities: readonly string[] = ['Amsterdam', 'Paris', 'Cologne', 'Brussels', 'Hamburg', 'Dusseldorf'];

export enum SortTypes {
  POPULAR = 'Popular',
  LOW = 'Price: low to high',
  HIGH = 'Price: high to low',
  TOP = 'Top rated first'
}

export const ratings: number[] = [5, 4, 3, 2, 1];

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';


