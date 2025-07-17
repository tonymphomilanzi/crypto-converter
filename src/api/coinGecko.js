import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchTopCoins = async () => {
  const res = await axios.get(`${BASE_URL}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 50,
      page: 1,
      sparkline: false,
    },
  });
  return res.data;
};

export const fetchPrice = async (coinId, targetCurrency = 'usd') => {
  const res = await axios.get(`${BASE_URL}/simple/price`, {
    params: {
      ids: coinId,
      vs_currencies: targetCurrency,
    },
  });
  return res.data;
};
