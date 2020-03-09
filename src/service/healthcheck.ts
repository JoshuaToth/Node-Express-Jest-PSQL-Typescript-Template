import { runQuery } from '../db/psql'
import { QueryResult } from 'pg'

const GET_HEALTHCHECK_RESULT = 'SELECT * FROM healthcheck'

export const GetHealthcheckStatus = async (): Promise<string> => {
  const result = await runQuery(GET_HEALTHCHECK_RESULT)
    .then((res: QueryResult<{ message: string }>) => {
      return res.rows[0].message
    })
    .catch(error => {
      console.log(error)
      return 'ERROR'
    })

  return result
}
