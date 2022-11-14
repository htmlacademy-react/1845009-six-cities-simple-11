import {useAppSelector} from '../../hooks';
import {City} from '../../types/city';
import CitiesList from '../../components/cities-list/cities-list';
import Offers from '../../components/offers/offers';


type MainPageProps = {
  cities: City[];
};

function MainPage({cities}: MainPageProps) {
  const currentCity = useAppSelector((state) => state.city);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList cities={cities} currentCity={currentCity} />
      </div>
      <Offers currentCity={currentCity} />
    </main>
  );
}

export default MainPage;
