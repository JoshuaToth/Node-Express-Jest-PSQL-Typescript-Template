module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test/unit/setup.ts'],
  roots: ['test/unit/']
};