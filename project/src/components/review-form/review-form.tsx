import React from 'react';
import {useState} from 'react';
import {ratings} from '../../const';

function ReviewForm(): JSX.Element {
  const [comment, setComment] = useState({text: '', rating: 0});
  const ratingInputs = ratings.map((rating) => (
    <React.Fragment key={rating}>
      <input className="form__rating-input visually-hidden" name="rating" value={rating.toString()} id={`${rating.toString()}-stars`} type="radio"
        onChange={(evt) => {
          setComment({
            ...comment,
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
  ));
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => {
      evt.preventDefault();
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingInputs}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment.text}
        onChange={(evt) => {
          setComment({
            ...comment,
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
          disabled={((comment.text.length < 50 || comment.text.length > 300) || comment.rating === 0)}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
