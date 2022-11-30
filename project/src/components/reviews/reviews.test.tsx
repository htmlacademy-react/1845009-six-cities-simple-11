import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import Reviews from './reviews';
import {makeComments} from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const comments = makeComments();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  COMMENTS: {currentComments: comments},
});

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Reviews currentId={14}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getAllByText(comments[0].comment)[0]).toBeInTheDocument();
  });
});
