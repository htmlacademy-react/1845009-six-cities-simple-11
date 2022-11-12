import {useState} from 'react';
import {RoomOffer} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import Sorting from '../sorting/sorting';
import Map from '../map/map';
import {City} from '../../types/city';

type PageProps = {
  offers: RoomOffer[];
  currentCity: City;
}

function Offers({offers, currentCity}: PageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<RoomOffer | undefined>(undefined);

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
