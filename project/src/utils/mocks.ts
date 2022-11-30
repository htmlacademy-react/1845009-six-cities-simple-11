import {Comments, Review} from './../types/review';
import {City} from './../types/city';
import {name, date, internet, address, random} from 'faker';
import {Offers, RoomOffer} from '../types/offer';

export const makeCityItem = (): City => ({
  name: address.cityName(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 10,
  }
});

export const makeOffer = (): RoomOffer => ({
  bedrooms: 3,
  city: makeCityItem(),
  description: random.words(),
  goods: ['TV', 'conditioner'],
  host: {
    avatarUrl: internet.url(),
    id: random.number(),
    isPro: random.boolean(),
    name: name.title(),
  },
  id: random.number(),
  images: [internet.url(), internet.url()],
  isPremium: random.boolean(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 10
  },
  maxAdults: 4,
  previewImage: internet.url(),
  price: random.number(),
  rating: 5,
  title: address.streetName(),
  type: 'hotel'
});

export const makeOffers = () => {
  const offers: Offers = [];
  for (let i = 0; i < 5; i++) {
    offers.push(makeOffer());
  }

  return offers;
};

export const makeComment = (i: number): Review => ({
  hotelId: i,
  comment: 'Great',
  date: date.recent().toDateString(),
  id: i + 10,
  rating: i + 3,
  user: {
    avatarUrl: internet.url(),
    id: i + 20,
    isPro: true,
    name: name.title(),
  },
});

export const makeComments = (): Comments => {
  const comments: Comments = [];
  for (let i = 0; i < 2; i++) {
    comments.push(makeComment(i));
  }

  return comments;
};

export const makeEmail = (): string => internet.email();
