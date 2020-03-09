import { Client, QueryResult, Pool } from 'pg'

const connect = async (): Promise<Client> => {
  const pool = new Pool()
  const client = new Client()
  await client.connect()
  return client
}

export const runQuery = async (query: string): Promise<QueryResult<any>> => {
  const client = await connect()
  let res: any
  try {
    res = await client.query(query)
  } catch (e) {
    throw e
  } finally {
    await client.end()
  }
  return res
}
