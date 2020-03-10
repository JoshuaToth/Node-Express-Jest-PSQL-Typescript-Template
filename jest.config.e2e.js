module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test/e2e/setup.ts'],
  roots: ['test/e2e/']
};