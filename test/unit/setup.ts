jest.mock('pg', () => {
  const mClient = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  }
  return { Client: jest.fn(() => mClient) }
})
