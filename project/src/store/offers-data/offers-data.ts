import {redirectToRoute} from '../action';
import {createSlice} from '@reduxjs/toolkit';
import {fetchOffersAction, fetchOfferAction, fetchNearOffersAction} from '../api-actions';
import {OffersData} from '../../types/state';
import {NameSpace} from '../../const';
import {AppRoute} from '../../const';

const initialState: OffersData = {
  isOffersDataLoading: false,
  offers: [],
  currentOffer: null,
  currentNearOffers: [],
  hasError: false
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        redirectToRoute(AppRoute.NotFound);
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.currentNearOffers = action.payload;
      });
  }
});

