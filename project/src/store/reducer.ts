import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {SortTypes, AuthorizationStatus} from '../const';
import { changeCityAction, sortOffersAction, loadOffersAction, requireAuthorizationAction, setErrorAction, setOffersDataLoadingStatus } from './action';
import {City} from '../types/city';
import {Offers} from '../types/offer';

type InitialState = {
  city: City;
  offers: Offers;
  sortType: SortTypes;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  city: cities[1],
  offers: [],
  sortType: SortTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null
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
      const currentCity = cities.find((city) => action.payload.city === city.name);
      if (currentCity) {
        state.city = currentCity;
      }
    })
    .addCase(sortOffersAction, (state, action) => {
      state.sortType = action.payload.sortType;
    });
});

export {reducer};

