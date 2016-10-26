import veact from 'veact'
import { state } from '../controllers'
import EventTable from './event_table'
import Header from './header'

const view = veact()

const { div, eventTable, header } = view.els({
  eventTable: EventTable,
  header: Header
})

view.styles({
  container: {
    margin: '100px 20px'
  },
})

view.render(() => {
  return div(
    header(),
    div('.container',
      eventTable({ events: state.get('events') })
    )
  )
})

export default view()
