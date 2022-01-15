import mysql2 from 'mysql2';
import Sequelize from 'sequelize';
import { createNamespace } from 'cls-hooked';
import dbConfigs from '../config/getDbConfigs';

export default class DbManager {
  static init() {
    const configs = dbConfigs();
    const cls = createNamespace('transaction-namespace');
    Sequelize.useCLS(cls);
    DbManager.poolObj = new Sequelize(configs.database, configs.user, configs.password, {
      host: configs.host,
      dialect: 'mysql',
      dialectModule: mysql2,
      operatorsAliases: false,
      logging: true,
      pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 10000,
      },
    });
  }

  static getConnectionPool() {
    return DbManager.poolObj;
  }
}
