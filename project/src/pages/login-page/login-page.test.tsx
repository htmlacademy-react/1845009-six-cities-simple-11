import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {AuthorizationStatus} from '../../const';
import LoginPage from './login-page';
import { HelmetProvider } from 'react-helmet-async';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.NoAuth},
  APP: {userEmail: null}
});

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <LoginPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });
});
