import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {offers} from '../mocks/offers';
import {SortTypes} from '../const';
import {sortOffers} from '../utils/sorting';
import {getOffersAction, changeCityAction, sortOffersAction} from './action';
import {getOffersByCity} from '../utils/utils';


const initialState = {
  city: cities[1],
  offers: getOffersByCity(offers, cities[1]),
  sortType: SortTypes.POPULAR
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffersAction, (state, action) => {
      state.offers = sortOffers(getOffersByCity(offers, action.payload.city), state.sortType);
    })
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(sortOffersAction, (state, action) => {
      state.sortType = action.payload.sortType;
      state.offers = sortOffers(getOffersByCity(offers, state.city), state.sortType);
    });
});

export {reducer};

