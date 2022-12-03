import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {AuthorizationStatus} from '../../const';
import LoginPage from './login-page';
import {HelmetProvider} from 'react-helmet-async';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.NoAuth},
  APP: {userEmail: null}
});

describe('Component: LoginPage', () => {
  it('should render correctly', async () => {
    history.push('/login');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <LoginPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('email'), 'test@gmail.com');
    await userEvent.type(screen.getByTestId('password'), '12345678');

    expect(screen.getByDisplayValue(/test@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/12345678/i)).toBeInTheDocument();
  });
});
