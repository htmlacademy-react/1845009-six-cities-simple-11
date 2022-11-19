import { RoomOffer } from './../types/offer';
import {City} from './../types/city';
import {AppRoute, SortTypes} from '../const';
import {Offers} from '../types/offer';
import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';
import {Comments} from '../types/review';

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const changeCityAction = createAction<City>('city/change');

export const sortOffersAction = createAction<{sortType: SortTypes}>('offers/sort');

export const loadOffersAction = createAction<Offers>('offers/load');

export const loadCurrentOfferAction = createAction<RoomOffer>('offer/load');

export const loadCurrentCommentsAction = createAction<Comments>('comments/load');

export const loadCurrentNearOffersAction = createAction<Offers>('offer/loadNearOffers');

export const requireAuthorizationAction = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setErrorAction = createAction<string | null>('app/setError');

export const redirectToRouteAction = createAction<AppRoute>('app/redirectToRoute');


