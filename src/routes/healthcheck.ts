import * as express from 'express'
const router = express.Router()

router.get('/', (_, res) => {
  res.send({ healthstatus: 'OK' })
})

export default router