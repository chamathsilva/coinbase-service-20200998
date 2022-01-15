import { getModule } from '../models/index';
import logger from "../util/logger";

class transactionDao {
    async getTransactions() {
      try {
        const transactionModel = getModule('transactionModel');
        const transactionList = await transactionModel.findAll({raw: true});
        return transactionList;
      }catch (e){
        logger.info(e)
        throw e
      }
    }
  
    async postTransaction(transaction){
      try {
        const transactionModel = getModule('transactionModel');
        const transactionResponse = await transactionModel.create(transaction);
        return transactionResponse;
      }catch (e){
        logger.info(e)
        throw e
      }
    }
  }
  export default new transactionDao();