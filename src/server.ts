import * as express from 'express'
import {router} from './routes/healthcheck'
const app = express()
const PORT = 8080

app.use('/healthcheck', router)

app.listen(PORT)

console.log(`server running at PORT:${PORT}`)