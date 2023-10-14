// This API Gives the List of coins
export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

// This API will give the Historical data and prices of different coins. 
export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

// This API will give more details about differenyt coins.
export const CryptoCurrencies = () =>
  `https://tusharoxacular09.github.io/cryptocurrency_api/api.json`;

// This API will give the values of different coins to exchange them. 
export const CryptoExchange = () =>
  `https://api.coingecko.com/api/v3/exchange_rates`;