import AWS from 'aws-sdk';
import logger from '../util/logger';
AWS.config.update({ region: 'us-east-1' });
const ssm = new AWS.SSM();

const values = {};

// values.db_password = 'test'
// values.db_host = 'root'
// values.db_user = '127.0.0.1'
// port: 3307

// values.db_password = 'dbpassword11'
// values.db_user = 'dbadmin'
values.db_host = process.env.DB_HOSTNAME

const configBaseURL = `/coinbase-service/`;

// Database Configuration
export async function fetchDatabaseConfigs() {
  const params = {
    Path: configBaseURL,
    Recursive: true,
    WithDecryption: true,
  };

  try {
    console.log('fetchDatabaseConfigs : start')
    const response = await ssm.getParametersByPath(params).promise();
    response.Parameters.forEach((element) => {
      console.log("element ", element);
      const param = element.Name.split(configBaseURL)[1]
      switch (param) {
        case 'password':
          values.db_password = element.Value;
          break;
        case 'user':
          values.db_user = element.Value;
          break;
        case 'host':
          values.db_host = element.Value;
          break;
        case 'database':
          values.db_database = element.Value;
          break;
        default:
          break;
      }
    });
    console.log('fetchDatabaseConfigs : done')
    console.log("values ", values);
    return '';
  } catch (error) {
    logger.error(error);
    throw new Error(error);
  }
}

export const getDBConfigValue = (key) => {
  if (values[key]) {
    return values[key];
  }
  const msg = `configuration key ${key} not found`;
  logger.error(msg);
  throw new Error(msg);
};
