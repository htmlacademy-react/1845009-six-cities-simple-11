import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Route, Routes } from 'react-router-dom';
import HistoryRouter from '../../components/history-route/history-route';
import { AppRoute } from '../../const';
import NotFoundPage from './not-found-page';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <NotFoundPage />
      </HistoryRouter>
    );

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('To the main page')).toBeInTheDocument();
  });

  it('should navigate to main page', async () => {
    history.push('/*');

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route path={'/*'} element={<NotFoundPage />} />
          <Route path={AppRoute.Root} element={<h1>Mock app screen</h1>}/>
        </Routes>
      </HistoryRouter>
    );

    await userEvent.click(screen.getByText(/To the main page/i));

    expect(screen.getByText(/Mock app screen/i)).toBeInTheDocument();
  });
});
