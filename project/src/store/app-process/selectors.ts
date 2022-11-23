import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {SortTypes} from '../../const';
import { City } from '../../types/city';

export const getCity = (state: State): City => state[NameSpace.App].city;
export const getSortTypes = (state: State): SortTypes => state[NameSpace.App].sortType;
export const getUserEmail = (state: State): string | null => state[NameSpace.App].userEmail;
export const getError = (state: State): string | null => state[NameSpace.App].error;
