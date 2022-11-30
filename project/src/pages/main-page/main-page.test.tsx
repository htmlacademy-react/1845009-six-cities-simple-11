import {render, screen} from '@testing-library/react';
import MainPage from './main-page';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {makeOffer} from '../../utils/mocks';
import {cities, SortTypes} from '../../const';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const currentOffers = [{...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}];

const store = mockStore({
  APP: {city: cities[1], sortType: SortTypes.POPULAR},
  OFFERS: {offers: currentOffers}
});

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainPage />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Cities')).toBeInTheDocument();
  });
});
