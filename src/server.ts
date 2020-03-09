require('dotenv').config();

import app from './server/config'

app.listen(process.env.SERVER_PORT)

console.log(`server started at port: ${process.env.SERVER_PORT}`)