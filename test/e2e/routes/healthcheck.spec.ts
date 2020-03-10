import * as request from 'supertest'
import app from '../../../src/server/config'

describe('/healthcheck', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('returns a 200 and an OK response', async () => {
    await request(app)
      .get('/healthcheck')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.healthstatus).toBe('OK')
      })
  })
})
