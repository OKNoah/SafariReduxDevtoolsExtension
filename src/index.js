import { autobind } from 'core-decorators'

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
    this.attributes = attributes
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

  append () {
    const element = document.querySelector(`#${this.attributes.id}`)

    if (!element) {
      document.body.append(this.frame)
    }
  }

  removeFrame () {
    const element = document.querySelector(`#${this.attributes.id}`)
    element.remove()
  }

  @autobind
  eventHandler (message) {
    const element = document.querySelector(`#${this.attributes.id}`)
    if (element) {
      return this.removeFrame()
    }

    this.append()
  }
}

const devTools = new SafariDevTools()

safari.self.addEventListener("message", devTools.eventHandler, false)
