import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import PageLayout from '../../pages/page-layout/page-layout';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browserHistory';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />);
  }


  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={AppRoute.NotFound}
              element={<NotFoundPage />}
            />
            <Route path={AppRoute.Offers}>
              <Route
                path={AppRoute.Room}
                element={<RoomPage />}
              />
              <Route
                path={AppRoute.NotFound}
                element={<NotFoundPage />}
              />
            </Route>
          </Route>
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
