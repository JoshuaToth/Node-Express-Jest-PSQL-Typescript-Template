import * as express from 'express'
import router from '../routes/healthcheck'
const app = express()

app.use('/healthcheck', router)

export default app