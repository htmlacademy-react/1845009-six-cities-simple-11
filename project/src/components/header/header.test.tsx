import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import {AuthorizationStatus} from '../../const';
import Header from './header';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.NoAuth},
  APP: {userEmail: null}
});

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
