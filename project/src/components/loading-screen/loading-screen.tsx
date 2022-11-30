import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <div className="tabs">
        <div className="spinner-box">
          <div className="pulse-container">
            <p className='visually-hidden'>Loading...</p>
            <div className="pulse-bubble pulse-bubble-1"></div>
            <div className="pulse-bubble pulse-bubble-2"></div>
            <div className="pulse-bubble pulse-bubble-3"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoadingScreen;
