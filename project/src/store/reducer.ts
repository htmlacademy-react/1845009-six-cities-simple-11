
import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {offers} from '../mocks/offers';
import {getOffersAction, changeCityAction} from './action';
import {getOffersByCity} from '../utils/utils';


const initialState = {
  city: cities[1],
  offers: getOffersByCity(offers, cities[1]),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffersAction, (state, action) => {
      state.offers = getOffersByCity(offers, action.payload.city);
    })
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload.city;
    });
});

export {reducer};

