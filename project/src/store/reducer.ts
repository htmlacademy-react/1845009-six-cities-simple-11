import { RoomOffer } from './../types/offer';
import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../const';
import {SortTypes, AuthorizationStatus} from '../const';
import {changeCityAction, sortOffersAction, loadOffersAction, requireAuthorizationAction, setErrorAction, setOffersDataLoadingStatus, loadCurrentOfferAction, loadCurrentCommentsAction, loadCurrentNearOffersAction} from './action';
import {City} from '../types/city';
import {Offers} from '../types/offer';
import {Comments} from '../types/review';

type InitialState = {
  city: City;
  offers: Offers;
  currentOffer: RoomOffer | null;
  currentComments: Comments;
  currentNearOffers: Offers;
  sortType: SortTypes;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  city: cities[1],
  offers: [],
  currentOffer: null,
  currentComments: [],
  currentNearOffers: [],
  sortType: SortTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadCurrentOfferAction, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadCurrentCommentsAction, (state, action) => {
      state.currentComments = action.payload;
    })
    .addCase(loadCurrentNearOffersAction, (state, action) => {
      state.currentNearOffers = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(sortOffersAction, (state, action) => {
      state.sortType = action.payload.sortType;
    });
});

export {reducer};

