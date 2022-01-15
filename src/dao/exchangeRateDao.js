import { getModule } from '../models/index';
import logger from "../util/logger";

class exchangeRateDao {
    async getExchangeRates() {
      try {
        const exchangeRateModel = getModule('exchangeRateModel');
        const exchangeRateList = await exchangeRateModel.findAll({raw: true});
        return exchangeRateList;
      }catch (e){
        logger.info(e)
        throw e
      }
    }
  
    async postExchangeRate(exchangeRate){
      try {
        const exchangeRateModel = getModule('exchangeRateModel');
        const exchangeRateModelResponse = await exchangeRateModel.create(exchangeRate);
        return exchangeRateModelResponse;
      }catch (e){
        logger.info(e)
        throw e
      }
    }
  }
  export default new exchangeRateDao();