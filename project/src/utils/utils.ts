import { City } from '../types/city';
import {RoomOffer} from './../types/offer';


export const calculateStarRating = (rating: number): number => Math.round(rating) * 20;

export const getOffersByCity = (offers: RoomOffer[], city: City): RoomOffer[] => offers.filter((offer) => city.name === offer.city.name);


