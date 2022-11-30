import {getCity, getSortType} from './../app-process/selectors';
import {RoomOffer} from './../../types/offer';
import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers} from '../../types/offer';
import {createSelector} from '@reduxjs/toolkit';
import {getOffersByCity} from '../../utils/utils';
import {sortOffers} from '../../utils/sorting';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getCurrentOffer = (state: State): RoomOffer | null => state[NameSpace.Offers].currentOffer;
export const getCurrentNearOffers = (state: State): Offers => state[NameSpace.Offers].currentNearOffers;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].hasError;

export const getOffersToRender = createSelector(
  getOffers,
  getCity,
  getSortType,
  (offers, city, sortType) => {
    const filteredOffers = getOffersByCity(offers, city);
    return sortOffers(filteredOffers, sortType);
  }
);
