import * as express from 'express'
import { GetHealthcheckStatus } from '../service/healthcheck'
const router = express.Router()

router.get('/', async (_, res) => {
  const healthcheckStatus = await GetHealthcheckStatus()
  res.send({ healthstatus: healthcheckStatus })
})

export default router