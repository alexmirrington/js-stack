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
    // Regex selects .tsx+ files to be transpiled to .jsx? before running.
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: [
    // Path query that selects test files to run.
    "<rootDir>/tests/**/*.test.(ts|tsx|js|jsx)",
    "<rootDir>/**/__tests__/*.test.(ts|tsx|js|jsx)",
  ],
};
