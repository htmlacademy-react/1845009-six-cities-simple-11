import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import {AuthorizationStatus, AppRoute, cities} from '../../const';
import App from './app';
import { makeComment, makeOffer, makeOffers } from '../../utils/mocks';
import { Comments } from '../../types/review';

const mockStore = configureMockStore();

const fakeOffer = {...makeOffer(), id: 13, city: cities[1]};
const fakeOffers = [...makeOffers(), fakeOffer];
const nearOffers = [{...makeOffer(), id: 14, city: cities[1]}, {...makeOffer(), id: 15, city: cities[1]}, {...makeOffer(), id: 16, city: cities[1]}];
const comments: Comments = [{...makeComment(10), hotelId: 13}, {...makeComment(10), hotelId: 13}];

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  OFFERS: {offers: fakeOffers, currentOffer: fakeOffer, currentNearOffers: nearOffers, isOffersDataLoading: false},
  COMMENTS: {currentComments: comments},
  APP: {city: cities[1], userEmail: null}
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPaige" when user navigate to  "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('Dusseldorf')).toBeInTheDocument();
    expect(screen.getByText('Hamburg')).toBeInTheDocument();
    expect(screen.getByText('Cologne')).toBeInTheDocument();
    expect(screen.getByText('Brussels')).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "RoomPage" when user navigate to "/offer/:id"', () => {
    history.push('/offer/:id');

    render(fakeApp);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();

  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existing-route');

    render(fakeApp);

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/На главную/i)).toBeInTheDocument();
  });
});
