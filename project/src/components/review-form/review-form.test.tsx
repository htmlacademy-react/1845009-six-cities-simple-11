import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import ReviewForm from './review-form';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const store = mockStore({
  COMMENTS: {currentComments: []}
});

describe('Component: ReviewForm', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm currentId={14}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Submit')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('comment'), 'Great place!');

    expect(screen.getByDisplayValue(/Great place!/i)).toBeInTheDocument();
  });
});
