import {redirectToRoute} from './action';
import {setUserEmail} from './app-process/app-process';
import {RoomOffer} from './../types/offer';
import {saveToken, dropToken} from './../services/token';
import {UserData} from '../types/user-data';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Offers} from '../types/offer';
import {APIRoute, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {Comments} from '../types/review';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<RoomOffer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
> (
  'offers/fetchCurrentOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<RoomOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
> (
  'offers/fetchNearOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comments, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
> (
  'comments/fetchComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const fetchSendCommentAction = createAsyncThunk<void, {id: number; comment: string; rating: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
> (
  'comments/fetchComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Comments}/${id}`, {comment, rating});
    dispatch(fetchCommentsAction(Number(id)));
  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    dispatch(setUserEmail(data.email));
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setUserEmail(email));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setUserEmail(null));
  },
);

