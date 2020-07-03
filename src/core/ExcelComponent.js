import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || ''
        this.emitter = options.emitter
        this.prepare()
        this.unsubscribers = []
    }

    // настраиваем копонент до Init
    prepare(){}

    toHTML() {
        return ''
    }

    $emit(event, ...args){
        this.emitter.emit(event, ...args)
    }

    $on(event, fn){
        const unsab = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsab)
    }

    // Инициализируем компанент
    // Добавляем DOM слушателей
    init(){
        this.initDomListeners()
    }

    // Удаляем DOM копонент
    // Чистим DOM слушателей
    destroy(){
        this.removeDomListeners()
        this.unsubscribers.forEach( unsab => unsab())
    }
}