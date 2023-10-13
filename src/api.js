export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const CryptoCurrencies = () =>
  `https://tusharoxacular09.github.io/cryptocurrency_api/api.json`;

export const CryptoExchange = () =>
  `https://api.coingecko.com/api/v3/exchange_rates`;