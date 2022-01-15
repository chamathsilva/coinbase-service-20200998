import logger from './util/logger';
import { fetchDatabaseConfigs } from './config/configHelper';
import DbManager from './resources/dbManager';
import { modelInitializer } from './models/index';


export default async function initializer(req, res, next) {

    logger.info('Initialization start');
    try {
      // fetch stage-specific configuration from the AWS SSM
      await fetchDatabaseConfigs();

      // Initiates the DBManager with connection pools
      DbManager.init();

      // Database connection
      const sequelize = DbManager.getConnectionPool();
      await sequelize.authenticate();
      logger.info('Connection has been established successfully.');

      // initialize sequelize models
      await modelInitializer();

      logger.info('Initialization complete');
    } catch (error) {
      console.log(error)
      next(error);
    }
}
