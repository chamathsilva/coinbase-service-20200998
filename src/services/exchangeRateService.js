import exchangeRateDao from "../dao/exchangeRateDao";

class ExchangeRateService {
  async getExchangeRates() {
    const data = await exchangeRateDao.getExchangeRates();
    return data;
  }

  async postExchangeRate(exchangeRate) {
    const data = await exchangeRateDao.postExchangeRate(exchangeRate);
    return data;
  }
}
export default new ExchangeRateService();
