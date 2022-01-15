import transactionService from "../transactionService";

jest.mock("../../dao/transactionDao");
jest.mock("../../config/configHelper");
jest.mock("../../config/configs");

beforeAll(() => {
  jest.resetModules();
  jest.clearAllMocks();
});

afterAll(() => {
  jest.clearAllMocks();
});

describe("services: transaction Service", () => {
  test("getTransactions should return data ", async () => {
    const response = await transactionService.getTransactions();
    expect(response).toBeDefined();
    expect(response[0]).toHaveProperty("transaction_id");
    expect(response[0]).toHaveProperty("coin");
    expect(response[0]).toHaveProperty("amount");
    expect(response[0]).toHaveProperty("user_id");
  });

  test("postTransaction should persist and return data ", async () => {
    const response = await transactionService.postTransaction({
      transaction_id: 7,
      coin: "LTC",
      amount: 963.256,
      user_id: 50,
      type: "SELL",
    });
    expect(response).toBeDefined();
    expect(response).toHaveProperty("transaction_id");
    expect(response).toHaveProperty("coin");
    expect(response).toHaveProperty("amount");
    expect(response).toHaveProperty("user_id");
  });
});
