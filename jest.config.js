module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  globals: {
    // Point ts-jest to jsconfig for transpilation.
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  transform: {
    // Regex selects .tsx+ files to be transpiled to .jsx+ before running.
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: [
    // Path query that selects test files to run.
    '<rootDir>/test/**/*.test.(ts|js)'
  ]
};