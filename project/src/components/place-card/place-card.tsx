import {Link} from 'react-router-dom';
import React from 'react';
import {RoomOffer} from '../../types/offer';
import {calculateStarRating} from '../../utils/utils';

type PageProps = {
  offer: RoomOffer;
}

function PlaceCard({offer}: PageProps): JSX.Element {
  const {title, price, type, previewImage, rating, isPremium, id} = offer;

  return (
    <React.Fragment>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calculateStarRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </React.Fragment>
  );
}

export default PlaceCard;
