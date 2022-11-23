import {rootReducer} from './../root-reducer';
import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browserHistory';
import {Middleware} from 'redux';

type Reducer = ReturnType <typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
