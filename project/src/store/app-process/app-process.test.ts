import {City} from './../../types/city';
import {SortTypes} from './../../const';
import {cities} from './../../const';
import {makeCityItem, makeEmail} from './../../utils/mocks';
import {appProcess, changeCity, setUserEmail, sortOffers} from './app-process';

describe('Reducer: appProcess', () => {
  const currentCity = cities[1];
  it('without additional parameters should return initial state', () => {
    expect(appProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({city: currentCity, sortType: SortTypes.POPULAR, userEmail: null});
  });

  it('should change current city', () => {
    const state = {city: currentCity, sortType: SortTypes.POPULAR, userEmail: null};
    const newCity: City = makeCityItem();
    expect(appProcess.reducer(state, changeCity(newCity)))
      .toEqual({city: newCity, sortType: SortTypes.POPULAR, userEmail: null});
  });

  it('should set user\'s email', () => {
    const state = {city: currentCity, sortType: SortTypes.POPULAR, userEmail: null};
    const newEmail: string = makeEmail();
    expect(appProcess.reducer(state, setUserEmail(newEmail)))
      .toEqual({city: currentCity, sortType: SortTypes.POPULAR, userEmail: newEmail});
  });

  it('should change type of sorting', () => {
    const state = {city: currentCity, sortType: SortTypes.POPULAR, userEmail: null};
    const sortType = SortTypes.HIGH;
    expect(appProcess.reducer(state, sortOffers({sortType})))
      .toEqual({city: currentCity, sortType: SortTypes.HIGH, userEmail: null});
  });
});
