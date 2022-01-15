import DataTypes from 'sequelize';
import logger from '../util/logger';
import DbManager from '../resources/dbManager';


const exchangeRateDefinition = require('./exchange_rate');
const transactionDefinition = require('./transaction');

const models = {};
const modelFiles = [
  'exchange_rate',
  'transaction',
];

export const modelInitializer = async () => {
  logger.info('- model initialization start');
  const sequelize = DbManager.getConnectionPool();

  const exchangeRateModel = exchangeRateDefinition.default(sequelize, DataTypes);
  const transactionModel = transactionDefinition.default(sequelize, DataTypes);

  models[exchangeRateModel.name] = exchangeRateModel;
  models[transactionModel.name] = transactionModel;

  // modelFiles
  //   .forEach((file) => {
  //     console.log(file)
  //   // eslint-disable-next-line global-require, import/no-dynamic-require
  //     const sequelizeModel = require(`./${file}.js`).default(sequelize, DataTypes);
  //     models[sequelizeModel.name] = sequelizeModel;
  //   });

  logger.info('- model initialization  complete');

  return 'done';
};

export const getModule = (moduleName) => models[moduleName];
export const getSequelize = () => DbManager.getConnectionPool();
