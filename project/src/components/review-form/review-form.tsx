import React from 'react';
import {useState} from 'react';
import {ratings} from '../../const';
import {useAppDispatch} from '../../hooks';
import {fetchSendCommentAction} from '../../store/api-actions';

type propType = {
  currentId: number;
}

function ReviewForm({currentId}: propType): JSX.Element {
  const [commentItem, setComment] = useState({text: '', rating: 0});
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    const id = currentId;
    const comment = commentItem.text;
    const rating = commentItem.rating;
    await dispatch(fetchSendCommentAction({id, comment, rating}));
    setComment({text: '', rating: 0});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => {
      evt.preventDefault();
      handleSubmit();
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((rating) => (
          <React.Fragment key={rating}>
            <input className="form__rating-input visually-hidden" name="rating" value={rating.toString()} id={`${rating.toString()}-stars`} type="radio"
              checked={rating === commentItem.rating}
              onChange={(evt) => {
                evt.target.checked = true;
                setComment({
                  ...commentItem,
                  rating: Number(evt.target.value)
                });
              }}
            />
            <label htmlFor={`${rating.toString()}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={commentItem.text}
        onChange={(evt) => {
          setComment({
            ...commentItem,
            text: evt.target.value
          });
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={((commentItem.text.length < 50 || commentItem.text.length > 300) || commentItem.rating === 0)}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
