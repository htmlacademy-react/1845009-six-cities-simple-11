import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<MainPage placesCount={placesCount}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route path={AppRoute.Offers}>
            <Route
              path={AppRoute.Room}
              element={<RoomPage />}
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
