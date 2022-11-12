import {RoomOffer} from '../types/offer';
import {SortTypes} from '../const';

const sortLowToHigh = (offer1: RoomOffer, offer2: RoomOffer): number => {
  if (offer1.price > offer2.price) {
    return 1;
  }

  if (offer1.price === offer2.price) {
    return 0;
  }

  return -1;
};

const sortHighToLow = (offer1: RoomOffer, offer2: RoomOffer): number => {
  if (offer1.price < offer2.price) {
    return 1;
  }

  if (offer1.price === offer2.price) {
    return 0;
  }

  return -1;
};

const sortByRating = (offer1: RoomOffer, offer2: RoomOffer): number => {
  if (offer1.rating < offer2.rating) {
    return 1;
  }

  if (offer1.rating === offer2.rating) {
    return 0;
  }

  return -1;
};

const sortOffers = (offers: RoomOffer[], type: string) => {
  switch (type) {
    case SortTypes.POPULAR:
      return offers;
    case SortTypes.HIGH:
      return offers.sort(sortHighToLow);
    case SortTypes.LOW:
      return offers.sort(sortLowToHigh);
    case SortTypes.TOP:
      return offers.sort(sortByRating);
    default:
      return offers;
  }
};

export {sortOffers};
