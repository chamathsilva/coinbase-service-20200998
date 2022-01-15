import exchangeRateService from "../exchangeRateService";

jest.mock("../../dao/exchangeRateDao");
jest.mock("../../config/configHelper");
jest.mock("../../config/configs");

beforeAll(() => {
  jest.resetModules();
  jest.clearAllMocks();
});

afterAll(() => {
  jest.clearAllMocks();
});

describe("services: exchangeRate Service", () => {
  test("getExchangeRates should return data ", async () => {
    const response = await exchangeRateService.getExchangeRates();
    expect(response).toBeDefined();
    expect(response[0]).toHaveProperty('exchange_rate_id')
    expect(response[0]).toHaveProperty('coin')
    expect(response[0]).toHaveProperty('value')

  });

  test("postExchangeRates should persist and return data ", async () => {
    const response = await exchangeRateService.postExchangeRate({
      coin: "LTC",
      value: 963.256,
    });
    expect(response).toBeDefined();
    expect(response).toHaveProperty('exchange_rate_id')
    expect(response).toHaveProperty('coin')
    expect(response).toHaveProperty('value')
  });
});
