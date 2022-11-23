import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {RoomOffer} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import Sorting from '../sorting/sorting';
import Map from '../map/map';
import {getOffersByCity} from '../../utils/utils';
import NotFoundOffers from '../../components/not-found-offers/not-found-offers';
import {sortOffers} from '../../utils/sorting';
import {getSortTypes} from '../../store/app-process/selectors';
import {getOffers} from '../../store/offers-data/selectors';
import { getCity } from '../../store/app-process/selectors';

function Offers(): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const [activeCard, setActiveCard] = useState<RoomOffer | undefined>(undefined);
  const allOffers = useAppSelector(getOffers);
  let offers = useAppSelector((state) => getOffersByCity(allOffers, currentCity));
  const sortType = useAppSelector(getSortTypes);
  offers = sortOffers(offers, sortType);

  if (offers.length === 0) {
    return <NotFoundOffers currentCity={currentCity.name} />;
  }

  const handleActiveCard = (card: RoomOffer):void => {
    setActiveCard(card);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((offer) => (
                <article className="cities__card place-card" key={offer.id} onMouseOver={() => handleActiveCard(offer)}>
                  <PlaceCard offer={offer} cardClass="cities"/>
                </article>))
            }
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map offers={offers} activeCard={activeCard} city={currentCity}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Offers;
