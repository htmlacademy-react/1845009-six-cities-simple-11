import {render, screen} from '@testing-library/react';
import {makeCityItem} from '../../utils/mocks';
import NotFoundOffers from './not-found-offers';

describe('Component: NotFoundOffers', () => {
  const currentCity = makeCityItem();
  it('should render correctly', () => {
    render(
      <NotFoundOffers currentCity={currentCity.name}/>
    );

    const statusElement = screen.getByText('No places to stay available');
    const descriptionElement = screen.getByText(`We could not find any property available at the moment in ${currentCity.name}`);

    expect(statusElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
