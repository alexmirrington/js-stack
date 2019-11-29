module.exports = {
  globals: {
    "ts-jest": {
        tsConfig: "tsconfig.json"
    }
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
      "**/test/**/*.test.(ts|js)"
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
};