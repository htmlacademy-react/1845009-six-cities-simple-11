import {render, screen} from '@testing-library/react';
import Map from './map';
import {makeOffer} from '../../utils/mocks';
import {cities} from '../../const';

const currentOffer = {...makeOffer(), city: cities[1]};
const offers = [{...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}, {...makeOffer(), city: cities[1]}];

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Map offers={offers} activeCard={currentOffer} city={cities[1]}/>
    );

    expect(screen.getByTestId('map')).toBeInTheDocument();
    screen.getByTestId('map').classList.contains('leaflet-container');
  });
});
