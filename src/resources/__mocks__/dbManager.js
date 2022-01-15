const DbManager = {
  init: jest.fn().mockReturnValue(''),
  getConnectionPool: jest.fn().mockReturnValue({ authenticate: jest.fn().mockReturnValue('') }),
};

export default DbManager;
