import {Offers} from './../../types/offer';
import { fetchOffersAction, fetchOfferAction, fetchNearOffersAction } from './../api-actions';
import {makeOffer, makeOffers} from './../../utils/mocks';
import {OffersData} from '../../types/state';
import {offersData} from './offers-data';

describe('Reducer: offersData', () => {
  let state: OffersData;
  const offers: Offers = makeOffers();
  const currentOffer = makeOffer();
  const currentNearOffers = makeOffers();

  beforeEach(() => {
    state = {
      isOffersDataLoading: false,
      offers: [],
      currentOffer: null,
      currentNearOffers: [],
      hasError: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should change data loading status to "True"', () => {
    expect(offersData.reducer(state, {type: fetchOffersAction.pending.type}))
      .toEqual({...state, isOffersDataLoading: true});
  });

  it('should update state by load offers', () => {
    state = {...state, isOffersDataLoading: true};
    expect(offersData.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: offers}))
      .toEqual({...state, offers: offers, isOffersDataLoading: false, hasError: false});
  });

  it('should set hasError flag if server is unavailable', () => {
    expect(offersData.reducer(state, {type: fetchOffersAction.rejected.type, payload: offers}))
      .toEqual({...state, isOffersDataLoading: false, hasError: true});
  });

  it('should set current offer by load offer', () => {
    state = {...state, offers: offers};
    expect(offersData.reducer(state, {type: fetchOfferAction.fulfilled.type, payload: currentOffer}))
      .toEqual({...state, currentOffer: currentOffer});
  });

  it('should set near offers by load offers', () => {
    state = {...state, offers: offers, currentOffer: currentOffer};
    expect(offersData.reducer(state, {type: fetchNearOffersAction.fulfilled.type, payload: currentNearOffers}))
      .toEqual({...state, currentNearOffers: currentNearOffers});
  });

});
