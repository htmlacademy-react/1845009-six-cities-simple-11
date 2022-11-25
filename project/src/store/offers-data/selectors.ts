import {RoomOffer} from './../../types/offer';
import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers} from '../../types/offer';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getCurrentOffer = (state: State): RoomOffer | null => state[NameSpace.Offers].currentOffer;
export const getCurrentNearOffers = (state: State): Offers => state[NameSpace.Offers].currentNearOffers;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].hasError;
