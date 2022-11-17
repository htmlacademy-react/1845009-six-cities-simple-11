import {City} from './../types/city';
import {SortTypes} from '../const';
import {Offers} from '../types/offer';
import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';

export const setOffersDataLoadingStatus = createAction<boolean>('offers/etOffersDataLoadingStatus');

export const changeCityAction = createAction<City>('city/change');

export const sortOffersAction = createAction<{sortType: SortTypes}>('offers/sort');

export const loadOffersAction = createAction<Offers>('offers/load');

export const requireAuthorizationAction = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setErrorAction = createAction<string | null>('app/setError');

export const setUserEmail = createAction<string | null>('user/email');

