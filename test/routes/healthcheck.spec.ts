import * as request from 'supertest'
import app from '../../src/server/config'

import { Client } from 'pg';

describe('/healthcheck', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('returns a 200 and an OK response', async () => {
    const client: any = new Client()
    client.query.mockResolvedValueOnce({ rows: [{message: 'OK'}], rowCount: 1 });

    await request(app)
      .get('/healthcheck')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.healthstatus).toBe('OK')
      })
  })

  it('returns a 200 and an ERROR response', async () => {
    const client: any = new Client()
    client.query.mockRejectedValueOnce('boom')

    await request(app)
      .get('/healthcheck')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.healthstatus).toBe('ERROR: DB healthcheck not confirmed')
      })
  })
})
