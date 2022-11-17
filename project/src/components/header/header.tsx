import Logo from '../../components/logo/logo';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import { setUserEmail } from '../../store/action';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector((state) => state.userEmail);
  const logOutHandle = () => {
    dispatch(logoutAction());
    dispatch(setUserEmail(null));
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth
              ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">{userEmail}</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/" onClick={() => logOutHandle()}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
              :
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>}

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
