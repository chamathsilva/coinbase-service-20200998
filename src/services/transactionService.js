import transactionDao from "../dao/transactionDao";

class TransactionService {
  async getTransactions() {
    const data = await transactionDao.getTransactions();
    return data;
  }

  async postTransaction(transaction) {
    const data = await transactionDao.postTransaction(transaction);
    return data;
  }
}
export default new TransactionService();
