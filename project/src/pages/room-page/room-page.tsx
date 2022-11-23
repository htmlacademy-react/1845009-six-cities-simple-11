import {useParams} from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import {useAppSelector} from '../../hooks';
import Reviews from '../../components/reviews/reviews';
import {calculateStarRating} from '../../utils/utils';
import {fetchCommentsAction, fetchNearOffersAction, fetchOfferAction} from '../../store/api-actions';
import {store} from '../../store/index';
import Map from '../../components/map/map';
import {useEffect} from 'react';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {getCurrentNearOffers, getCurrentOffer} from '../../store/offers-data/selectors';

function RoomPage(): JSX.Element {
  const params = useParams();
  useEffect(() => {
    store.dispatch(fetchOfferAction(Number(params.id)));
    store.dispatch(fetchCommentsAction(Number(params.id)));
    store.dispatch(fetchNearOffersAction(Number(params.id)));
  },[params.id]);

  const currentOffer = useAppSelector(getCurrentOffer);
  const nearOffers = useAppSelector(getCurrentNearOffers);

  if (!currentOffer) {
    return (
      <LoadingScreen />
    );
  }

  const {title, type, bedrooms, description, price, goods, images, host, isPremium, rating, maxAdults} = currentOffer;


  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="Studio"/>
                </div>
              ))
            }
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium ?
              <div className="property__mark">
                <span>Premium</span>
              </div>
              : ''}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${calculateStarRating(rating)}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
              </li>
              <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                  <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {host.isPro ?
                  <span className="property__user-status">
                      Pro
                  </span>
                  : ''}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <Reviews currentId={currentOffer.id}/>
          </div>
        </div>
        <section className="property__map map">
          <Map offers={nearOffers} city={currentOffer.city}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighborhood</h2>
          <div className="near-places__list places__list">
            {
              nearOffers.map((offer) => (
                <article className="near-places__card place-card" key={offer.id}>
                  <PlaceCard offer={offer} cardClass="near-places"/>
                </article>))
            }
          </div>
        </section>
      </div>
    </main>
  );
}

export default RoomPage;
