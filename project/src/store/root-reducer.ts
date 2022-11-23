import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {appProcess} from './app-process/app-process';
import {offersData} from './offers-data/offers-data';
import {commentsData} from './comments-data/comments-data';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Comments]: commentsData.reducer,
  [NameSpace.App]: appProcess.reducer
});
