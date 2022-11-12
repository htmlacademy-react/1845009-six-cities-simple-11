import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="container" style={{margin: '0 auto', marginTop: '100px', textAlign: 'center'}}>
      <h1 >404 Not Found</h1>
      <Link to="/">На главную</Link>
    </div>
  );
}

export default NotFoundPage;
