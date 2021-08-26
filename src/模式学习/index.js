const EVENTS_ONCE_SYMBOL = Symbol('EVENTS_ONCE_SYMBOL')
const EVENTS_BATCH_SYMBOL = Symbol('EVENTS_BATCH_SYMBOL')

const ATTACHED_SYMBOL = Symbol('ATTACHED_SYMBOL')

const GlobalEnv {
  ALL_EVENT_DRIVERS: []
}

const isWindow = obj => Object.prototype.toString.call(obj) === '[object Window]'

class EventDriver {
  engine
  container
  contentWindow
  context

  constructor(engine, context) {
    this.engine = engine
    this.context = context
  }

  dispatch(event) {
    this.engine.dispatch(event, this.context)
  }

  subscribe(subscriber) {
    return this.engine.subscribe(subscriber)
  }

  subscribeWidth (type, subscriber) {
    return this.subscribeWidth(type, subscriber)
  }

  unsubscribe () {

  }

  attach(container) {
    console.error('attach must implement')
  }

  detach (container) {
    console.error('detach must implement')
  }

  eventTarget(type) {
    if (type === 'resize' || type === 'scroll') {
      if (this.container === this.contentWindow.document) {
        return this.contentWindow
      }
    }
    return this.container
  }

  addEventListener(type, listener, options) {
    const target = this.eventTarget(type)
    if (options.once) {

    }
  }

  // attach 附加
  attachEvents (container, contentWindow, context) {

  }

  // detach 分离
  detachEvents () {}

  destroy () {
    this.detachEvents()
    this.unsubscribe()
  }


}