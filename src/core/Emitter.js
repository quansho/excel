 export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // dispatch, fire, trigger | Listen Listeners if exists
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
          return false
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }

    // on, listen
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)

        return () => {
            this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}

// const emmit = new Emitter()
//
// const subscribe = emmit.subscribe('artur', data=>console.log(data))
//
// emmit.emit('artur', 54)
//  emmit.emit('artur', 70)
//
//  emmit.emit('artur', 80)