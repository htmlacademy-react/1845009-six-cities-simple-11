import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    hotelId: 1,
    comment: 'Great experience! Thanks a lot!',
    date: 'Fri Oct 10 2022 10:09:35 GMT+0300 (Москва, стандартное время)',
    id: 10,
    rating: 5,
    user: {
      avatarUrl: 'https://fanibani.ru/images/wp-content/uploads/2021/01/image202-11-576x720.jpg',
      id: 6,
      isPro: false,
      name: 'Peter'
    }
  },

  {
    hotelId: 2,
    comment: 'Great atmosphere , service, food, location. Just perfect. We\'ve planned a photoshoot for 2 days, incl. overnight stay, lunches, diners & drinks. Everything was just perfect. Team is very helpful to make the best of it.',
    date: 'Mon Sep 28 2022 09:09:55 GMT+0300 (Москва, стандартное время)',
    id: 11,
    rating: 5,
    user: {
      avatarUrl: 'https://www.b17.ru/foto/uploaded/upl_1658654946_619746_kejnw.jpg',
      id: 7,
      isPro: false,
      name: 'Jane'
    }
  },

  {
    hotelId: 4,
    comment: 'What a great hotel! The staff was really helpful in every way. The hotel has a truly amazing, one-of-a-kind art collection, and when they found out my husband is really interested in art, one of the staff - William - took him on a tour. It was so kind.',
    date: 'Sat Oct 21 2022 08:23:35 GMT+0300 (Москва, стандартное время)',
    id: 12,
    rating: 4,
    user: {
      avatarUrl: 'https://yt3.ggpht.com/57hyzFSqfoGDr6MQxSf6vuBariXX8U-gmNp3hX3WTSejVyNS9f9PVJs3vqGFQQirWmzPNaegV3o=s900-c-k-c0x00ffffff-no-rj',
      id: 8,
      isPro: true,
      name: 'Mark'
    }
  },

  {
    hotelId: 4,
    comment: 'We had such a wonderful 6 day stay here! First of all, thank you Derek at the front desk! Upon arrival, we were greeted so warm and friendly, and nothing was too much. The ladies at breakfast were also lovely and it was so nice to have such a kind greeting esp.',
    date: 'Fri Oct 11 2022 19:29:45 GMT+0300 (Москва, стандартное время)',
    id: 13,
    rating: 5,
    user: {
      avatarUrl: 'https://i04.appmifile.com/753_bbs_en/03/09/2020/bb46ffeebbac47277f76e8aaa76a2215.jpg',
      id: 9,
      isPro: false,
      name: 'Ben'
    }
  },

  {
    hotelId: 5,
    comment: 'This is an extremely nice hotel and a perfect location and quite an experience to stay there. The only thing we did not like about our room was that there was no view but we were told that there was none and the air condition outside was a bit noisy otherwise we would have given a 5 for sure.',
    date: 'Thu Oct 19 2022 06:10:01 GMT+0300 (Москва, стандартное время)',
    id: 14,
    rating: 4,
    user: {
      avatarUrl: 'https://yt3.ggpht.com/ytc/AMLnZu-_NdaVQ4H_OYKN4NkGP47fC3iE2LweeyWaLCfO=s900-c-k-c0x00ffffff-no-rj',
      id: 10,
      isPro: false,
      name: 'Jean'
    }
  },
];
