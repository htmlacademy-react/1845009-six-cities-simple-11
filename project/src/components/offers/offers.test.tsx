import {render, screen} from '@testing-library/react';
import Offers from './offers';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import {cities, SortTypes} from '../../const';
import {makeOffer} from '../../utils/mocks';

const mockStore = configureMockStore();

const currentOffers = [{...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}];

const store = mockStore({
  APP: {city: cities[1], sortType: SortTypes.POPULAR},
  OFFERS: {offers: currentOffers}
});

const history = createMemoryHistory();

describe('Component: Offers', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Offers />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByText(`${currentOffers.length} places to stay in ${cities[1].name}`)).toBeInTheDocument();
  });
});
