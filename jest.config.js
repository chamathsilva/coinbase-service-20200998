module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/services/*.js',
    '!src/**/*.test.js',
    '!src/resources/*.js',
    '!src/models/*.js',
    '!src/dao/*.js',
  ],
  coverageThreshold: {
    './src/': {
      branches: 5,
      functions: 5,
      lines: 5,
      statements: 5,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: [],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
