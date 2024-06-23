import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '7348e2934bmshd2c502637cfc453p1f0630jsn4ba59bd1d1e8',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (count) => ({
        method: 'GET',
        url: '/news',
        params: {
          safeSearch: 'Off',
          textFormat: 'Raw',
          limit: `${count}` //changble
        },
        headers: cryptoNewsHeaders
      })
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoNewsHeaders = {
//   'X-RapidAPI-Key': '7348e2934bmshd2c502637cfc453p1f0630jsn4ba59bd1d1e8',
//   'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
// };

// const baseUrl = 'https://crypto-news16.p.rapidapi.com';

// export const cryptoNewsApi = createApi({
//   reducerPath: 'cryptoNewsApi',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: () => ({
//         method: 'GET',
//         url: '/news/top/5',
//         headers: cryptoNewsHeaders,
//       }),
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;
