const transactionDao = {
  getTransactions: jest.fn().mockResolvedValue([
    {
      transaction_id: 6,
      coin: "LTC",
      amount: "963.2560",
      user_id: 50,
      type: "SELL",
    },
  ]),
  postTransaction: jest.fn().mockResolvedValue({
    transaction_id: 7,
    coin: "LTC",
    amount: 963.256,
    user_id: 50,
    type: "SELL",
  }),
};

export default transactionDao;
