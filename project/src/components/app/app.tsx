import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import PageLayout from '../../pages/page-layout/page-layout';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {Review} from '../../types/review';
import {City} from '../../types/city';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { useAppDispatch } from '../../hooks';
import { getOffersAction } from '../../store/action';

type AppScreenProps = {
  reviews: Review[];
  cities: City[];
}

function App({reviews, cities}: AppScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(getOffersAction());

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route
              index
              element={<MainPage cities={cities}/>}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
            <Route path={AppRoute.Offers}>
              <Route
                path={AppRoute.Room}
                element={<RoomPage reviews={reviews}/>}
              />
            </Route>
          </Route>
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
