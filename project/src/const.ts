export enum AppRoute {
  Login = '/login',
  Root = '/',
  Room = ':id',
  Offers = '/offer'
}

type SortingType = {
  POPULAR: string;
  LOW: string;
  HIGH: string;
  TOP: string;
}

export const SortTypes: SortingType = {
  POPULAR: 'Popular',
  LOW: 'Price: low to high',
  HIGH: 'Price: high to low',
  TOP: 'Top rated first'
};

export const ratings: number[] = [5, 4, 3, 2, 1];

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';


