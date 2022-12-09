import {Link} from 'react-router-dom';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="container container__not-found-page">
      <h1 >404 Not Found</h1>
      <Link to="/">To the main page</Link>
    </div>
  );
}

export default NotFoundPage;
