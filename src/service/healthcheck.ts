import { runQuery } from '../db/psql'
import { QueryResult } from 'pg'

const GET_HEALTHCHECK_RESULT = 'SELECT * FROM healthcheck'

export type HealthCheckResponses = 'OK' | 'ERROR: DB healthcheck not confirmed'

export const GetHealthcheckStatus = async (): Promise<HealthCheckResponses> => {
  const result: HealthCheckResponses = await runQuery(GET_HEALTHCHECK_RESULT)
    .then((res: QueryResult<{ message: string }>) => {
      return res.rows[0].message === 'OK' ? 'OK' : 'ERROR: DB healthcheck not confirmed'
    })
    .catch(error => {
      console.log(error)
      return 'ERROR: DB healthcheck not confirmed'
    })

  return result
}
