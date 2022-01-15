import { getDBConfigValue } from './configHelper';

export default function getDbConfigs() {
  const dbConfigs = {
    database: 'coinbase_db',
    password: getDBConfigValue('db_password'),
    host: getDBConfigValue('db_host'),
    user: getDBConfigValue('db_user'),
  };
  return dbConfigs;
}
