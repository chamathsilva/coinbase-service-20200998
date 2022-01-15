import { Router } from "express";
import ExchangeRateApi from "./exchangeRateApi"
import TransactionApi from "./transactionApi"


const router = new Router({ mergeParams: true });

const exchangeRateApi = new ExchangeRateApi();
const transactionApi = new TransactionApi();

router.use("/exchange-rate/", exchangeRateApi.router);
router.use("/transaction/", transactionApi.router);

module.exports = router;

//