import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {RoomOffer} from '../../types/offer';
import {Review} from '../../types/review';

type AppScreenProps = {
  offers: RoomOffer[];
  reviews: Review[];
}

function App({offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<MainPage offers={offers}/>}
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
