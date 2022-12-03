import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {makeComment, makeOffer} from '../../utils/mocks';
import HistoryRouter from '../../components/history-route/history-route';
import {AuthorizationStatus, cities} from '../../const';
import RoomPage from './room-page';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const currentOffer = {...makeOffer(), city: cities[0], id: 14};

const currentNearOffers = [{...makeOffer(), city: cities[0]}, {...makeOffer(), city: cities[0]}, {...makeOffer(), city: cities[0]}, {...makeOffer(), city: cities[0]}];

const comments = [{...makeComment(14), hotelId: 14}, {...makeComment(14), hotelId: 14}];

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.NoAuth},
  OFFERS: {currentOffer: currentOffer, currentNearOffers: currentNearOffers,},
  COMMENTS: {currentComments: comments},
});

describe('Component: RoomPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <RoomPage />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(currentOffer.title)).toBeInTheDocument();
    expect(screen.getAllByText(currentOffer.type)[0]).toBeInTheDocument();
    expect(screen.getByText(currentOffer.description)).toBeInTheDocument();
    expect(screen.getByText('Other places in the neighborhood')).toBeInTheDocument();
  });
});
