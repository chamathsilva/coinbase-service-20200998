const exchangeRateDao = {
  getExchangeRates: jest.fn().mockResolvedValue([
    {
      exchange_rate_id: 5,
      coin: "LTC",
      value: "963.2560",
    },
  ]),
  postExchangeRate: jest.fn().mockResolvedValue({
    exchange_rate_id: 6,
    coin: "LTC",
    value: 963.256,
  }),
};

export default exchangeRateDao;
