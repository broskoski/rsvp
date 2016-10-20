import Koa from 'koa'
import { graphqlize } from 'joiql-mongo'
import router from './router'
import * as event from './models/event'
import * as reservation from './models/reservation'

const app = new Koa()

router.all('/api/event', graphqlize(event))
router.all('/api/reservation', graphqlize(reservation))
app.use(router.routes())

export default app