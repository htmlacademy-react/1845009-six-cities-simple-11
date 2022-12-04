import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/app-process/app-process';
import {cities} from '../../const';
import {getCity} from '../../store/app-process/selectors';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <Link className={`locations__item-link ${city.name === currentCity.name ? 'tabs__item tabs__item--active' : ''}`}
              onClick={() => {
                dispatch(changeCity(city));
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
