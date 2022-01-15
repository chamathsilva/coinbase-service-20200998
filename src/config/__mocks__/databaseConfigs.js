export const databaseConfigs = jest.fn();
databaseConfigs.mockReturnValue(
  {
    database: 'LOCAL_DB',
    password: 'LOCAL_DB_PW',
    host: 'LOCAL_DB_HOST',
    user: 'LOCAL_DB_USER',
    port: 'LOCAL_DB_PORT',
  }
)