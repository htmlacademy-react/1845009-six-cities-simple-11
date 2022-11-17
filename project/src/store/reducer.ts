import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../const';
import {SortTypes, AuthorizationStatus} from '../const';
import { changeCityAction, sortOffersAction, loadOffersAction, requireAuthorizationAction, setErrorAction, setOffersDataLoadingStatus, setUserEmail } from './action';
import {City} from '../types/city';
import {Offers} from '../types/offer';

type InitialState = {
  city: City;
  offers: Offers;
  sortType: SortTypes;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
  userEmail: string | null;
}

const initialState: InitialState = {
  city: cities[1],
  offers: [],
  sortType: SortTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  userEmail: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
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
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

export {reducer};

