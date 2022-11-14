import { Link } from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {changeCityAction} from '../../store/action';
import {City} from '../../types/city';

type PageProps = {
  cities: City[];
  currentCity: City;
}

function CitiesList({cities, currentCity}: PageProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <Link className={`locations__item-link ${city.name === currentCity.name ? 'tabs__item tabs__item--active' : ''}`}
              onClick={() => {
                dispatch(changeCityAction({city}));
              }}
              to=""
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
