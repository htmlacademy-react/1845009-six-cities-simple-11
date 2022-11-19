import {RoomOffer} from './../types/offer';
import {saveToken, dropToken} from './../services/token';
import {UserData} from '../types/user-data';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Offers} from '../types/offer';
import { loadOffersAction, requireAuthorizationAction, setErrorAction, setOffersDataLoadingStatus, loadCurrentOfferAction, loadCurrentCommentsAction, loadCurrentNearOffersAction, redirectToRouteAction } from './action';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {store} from './index';
import {AuthData} from '../types/auth-data';
import {Comments} from '../types/review';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setErrorAction(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffersAction(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
> (
  'data/fetchCurrentOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<RoomOffer>(`${APIRoute.Offers}/${id}`);
      dispatch(loadCurrentOfferAction(data));
    }
    catch {
      dispatch(redirectToRouteAction(AppRoute.NotFound));
    }
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
> (
  'data/fetchNearOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadCurrentNearOffersAction(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
> (
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
    dispatch(loadCurrentCommentsAction(data));
  }
);

export const fetchSendCommentAction = createAsyncThunk<void, {id: number; comment: string; rating: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
> (
  'data/fetchComment',
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
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
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
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    dispatch(redirectToRouteAction(AppRoute.Root));
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
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  },
);

