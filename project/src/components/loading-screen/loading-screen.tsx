import React from 'react';
import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <div className="tabs">
          <div className="spinner-box">
            <div className="pulse-container">
              <div className="pulse-bubble pulse-bubble-1"></div>
              <div className="pulse-bubble pulse-bubble-2"></div>
              <div className="pulse-bubble pulse-bubble-3"></div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default LoadingScreen;
