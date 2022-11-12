import {RoomOffer} from '../../types/offer';
import {City} from '../../types/city';
import CitiesList from '../../components/cities-list/cities-list';
import Offers from '../../components/offers/offers';
import NotFoundOffers from '../../components/not-found-offers/not-found-offers';


type MainPageProps = {
  offers: RoomOffer[];
  cities: City[];
  currentCity: City;
};

function MainPage({offers, cities, currentCity}: MainPageProps) {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList cities={cities} currentCity={currentCity} />
      </div>
      {offers.length > 0 ? <Offers offers={offers} currentCity={currentCity}/> : <NotFoundOffers currentCity={currentCity.name} />}
    </main>
  );
}

export default MainPage;
