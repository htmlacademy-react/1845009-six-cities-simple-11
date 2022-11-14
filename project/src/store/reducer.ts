import { RoomOffer } from './../types/offer';
import { City } from './../types/city';
import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {offers} from '../mocks/offers';
import {SortTypes} from '../const';
import {getOffersAction, changeCityAction, sortOffersAction} from './action';

const initialState: {
  city: City;
  offers: RoomOffer[];
  sortType: string;
} = {
  city: cities[1],
  offers: [],
  sortType: SortTypes.POPULAR
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffersAction, (state) => {
      state.offers = offers;
    })
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(sortOffersAction, (state, action) => {
      state.sortType = action.payload.sortType;
    });
});

export {reducer};

