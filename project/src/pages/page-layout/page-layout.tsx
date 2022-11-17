import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Outlet} from 'react-router-dom';
import Header from '../../components/header/header';

function PageLayout(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <Header />
      <Outlet />
    </div>
  );
}

export default PageLayout;
