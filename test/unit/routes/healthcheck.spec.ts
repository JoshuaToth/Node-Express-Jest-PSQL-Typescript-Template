import * as request from 'supertest'
import app from '../../../src/server/config'

import { runQuery } from '../../../src/db/psql'

jest.mock('../../../src/db/psql')

describe('/healthcheck', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const query = runQuery as jest.Mock

  it('returns a 200 and an OK response', async () => {
    query.mockResolvedValueOnce({
      rows: [{ message: 'OK' }],
      rowCount: 1,
    })

    await request(app)
      .get('/healthcheck')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.healthstatus).toBe('OK')
      })
  })

  it('returns a 200 and an ERROR response', async () => {
    query.mockRejectedValueOnce('boom')

    await request(app)
      .get('/healthcheck')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.healthstatus).toBe(
          'ERROR: DB healthcheck not confirmed'
        )
      })
  })
})
