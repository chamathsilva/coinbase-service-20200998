import { Router } from "express";
import HttpStatus from "http-status-codes";
import exchangeRateService from "../services/exchangeRateService";

class ExchangeRateApi {
  constructor() {
    this.router = new Router({ mergeParams: true });
    this.router.get("/", this.getExchangeRates.bind(this));
    this.router.post("/", this.postExchangeRate.bind(this));
  }

  async getExchangeRates(req, res, next) {
    try {
      const response = await exchangeRateService.getExchangeRates();
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  }

  async postExchangeRate(req, res, next) {
    try {
      const response = await exchangeRateService.postExchangeRate(req.body);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  }
}
export default ExchangeRateApi;
