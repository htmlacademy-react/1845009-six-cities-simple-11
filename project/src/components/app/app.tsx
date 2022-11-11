import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {Review} from '../../types/review';
import {City} from '../../types/city';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

type AppScreenProps = {
  reviews: Review[];
  cities: City[];
}

function App({reviews, cities}: AppScreenProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            index
            element={<MainPage offers={offers} cities={cities} currentCity={currentCity}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route path={AppRoute.Offers}>
            <Route
              path={AppRoute.Room}
              element={<RoomPage offers={offers} reviews={reviews}/>}
            />
          </Route>
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
