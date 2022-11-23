import {SortTypes} from './../const';
import {City} from './city';
import {Comments} from './review';
import {AuthorizationStatus} from '../const';
import {store} from '../store/index';
import {RoomOffer, Offers} from './offer';

export type State = ReturnType<typeof store.getState>;

export type AppProcess = {
  city: City;
  sortType: SortTypes;
  error: string | null;
  userEmail: string | null;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type OffersData = {
  isOffersDataLoading: boolean;
  offers: Offers;
  currentOffer: RoomOffer | null;
  currentNearOffers: Offers;
}

export type CommentsData = {
  currentComments: Comments;
}

export type AppDispatch = typeof store.dispatch;
