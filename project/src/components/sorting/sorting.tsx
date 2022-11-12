import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SortTypes} from '../../const';
import { sortOffersAction } from '../../store/action';

function Sorting(): JSX.Element {
  const [openedOptions, setOptionsState] = useState(false);
  const optionsHandler = () => {
    setOptionsState(!openedOptions);
  };
  const activeSort = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();
  const sortingHandler = (sortType: string) => {
    optionsHandler();
    if (sortType === activeSort) {
      return;
    }
    dispatch(sortOffersAction({sortType}));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={optionsHandler}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${openedOptions ? 'opened' : 'closed'}`}>
        {Object.values(SortTypes).map((sortType) => (
          <li className={`places__option ${activeSort === sortType ? 'places__option--active' : ''}`}key={sortType}
            tabIndex={0}
            onClick={() => {
              sortingHandler(sortType);
            }}
          >{sortType}
          </li>))}
      </ul>
    </form>
  );
}

export default Sorting;
