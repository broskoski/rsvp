import { connect } from 'joiql-mongo'
import Koa from 'koa'
import event from './apps/event'
import admin from './apps/admin'

const app = new Koa()
const { PORT, MONGO_URL } = process.env

// Mount apps
app.use(...admin.middleware)
app.use(...event.middleware)

// Connect to Mongo and start server
connect(MONGO_URL)
app.listen(PORT)

console.log('Listening on ' + PORT)
