import CitiesList from '../../components/cities-list/cities-list';
import Offers from '../../components/offers/offers';


function MainPage() {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList />
      </div>
      <Offers />
    </main>
  );
}

export default MainPage;
