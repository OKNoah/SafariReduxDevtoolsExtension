// import request from 'superagent'

const defaultAttributes = {
  src: 'http://localhost:3001',
  ref: 'ReduxDevtools',
  id: 'ReduxDevtools',
  style: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100%'
  }
}

class SafariDevTools {
  constructor (attributes = defaultAttributes) {
    this.frame = document.createElement('iframe')

    for (let attribute in attributes) {
      switch (attribute) {
        case "style":
          for (let prop in attributes[attribute]) {
            this.frame.style[prop] = attributes[attribute][prop]
          }
          break;
        default:
          this.frame.setAttribute(attribute, attributes[attribute])
      }
    }
  }

  eventHandler (event) {
    console.log('event', event)
    switch (event) {
      case 'toggle-devtools':
        this.remove()
        break;
    }
  }

  append () {
    document.body.append(this.frame)
  }

  remove() {
    console.log('removing')
    delete this.frame.ref
  }
}

const devTools = new SafariDevTools()

devTools.append()

safari.self.addEventListener("message", devTools.eventHandler, false)
