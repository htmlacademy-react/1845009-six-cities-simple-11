import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city';

export const changeCityAction = createAction<{city: City}>('city/change');

export const getOffersAction = createAction<{city: City}>('offers/get',);

export const sortOffersAction = createAction<{sortType: string}>('offers/sort');

