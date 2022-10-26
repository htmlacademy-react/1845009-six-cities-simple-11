import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <React.Fragment>
      <Helmet>
        <title>Six cities. Page not found</title>
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
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="container" style={{margin: '0 auto', marginTop: '100px', textAlign: 'center'}}>
        <h1 >404 Not Found</h1>
        <Link to="/">На главную</Link>
      </div>
    </React.Fragment>
  );
}

export default NotFoundPage;
