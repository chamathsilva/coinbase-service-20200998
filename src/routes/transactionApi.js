import { Router } from "express";
import HttpStatus from "http-status-codes";
import transactionService from "../services/transactionService";

class TransactionApi {
  constructor() {
    this.router = new Router({ mergeParams: true });
    this.router.get("/", this.getTransactions.bind(this));
    this.router.post("/", this.postTransaction.bind(this));
  }

  async getTransactions(req, res, next) {
    try {
      const response = await transactionService.getTransactions();
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  }

  async postTransaction(req, res, next) {
    try {
      const response = await transactionService.postTransaction(req.body);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      next(error);
    }
  }
}
export default TransactionApi;
