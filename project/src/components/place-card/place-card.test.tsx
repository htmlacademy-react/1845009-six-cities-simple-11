import {render, screen} from '@testing-library/react';
import {makeOffer} from '../../utils/mocks';
import PlaceCard from './place-card';
import HistoryRouter from '../history-route/history-route';
import {createMemoryHistory} from 'history';

const offer = makeOffer();
const history = createMemoryHistory();

describe('Component: PlaceCard', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <PlaceCard offer={offer} cardClass="cities"/>
      </HistoryRouter>
    );

    expect(screen.getByText(offer.title)).toBeInTheDocument();
    expect(screen.getByText(offer.type)).toBeInTheDocument();
  });
});
