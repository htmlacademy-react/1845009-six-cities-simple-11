import { cities } from '../const';
import { City } from '../types/city';
import {RoomOffer} from './../types/offer';

export const calculateStarRating = (rating: number): number => Math.round(rating) * 20;

export const getOffersByCity = (offers: RoomOffer[], city: City): RoomOffer[] => offers.filter((offer) => city.name === offer.city.name);

export const getRandomCity = () => {
  const min = 0;
  const max = cities.length;
  const randomIndex = Math.floor(Math.random() * (max - min)) + min;
  return cities[randomIndex];
};

export const formatDate = (date: string): string => {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions | undefined = {
    year: 'numeric',
    month: 'long',
  };

  return d.toLocaleString('en-US', options);
};


