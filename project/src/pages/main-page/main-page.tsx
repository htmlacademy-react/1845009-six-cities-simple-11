import React from 'react';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import CitiesList from '../../components/cities-list/cities-list';
import Offers from '../../components/offers/offers';
import NotFoundOffers from '../../components/not-found-offers/not-found-offers';
import {RoomOffer} from '../../types/offer';
import {City} from '../../types/city';


type MainPageProps = {
  offers: RoomOffer[];
  cities: City[];
  currentCity: City;
};

function MainPage({offers, cities, currentCity}: MainPageProps): JSX.Element {

  return (
    <React.Fragment>
      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities} currentCity={currentCity} />
        </div>
        {offers.length > 0 ? <Offers offers={offers} currentCity={currentCity}/> : <NotFoundOffers currentCity={currentCity.name} />}
      </main>
    </React.Fragment>
  );
}

export default MainPage;
