import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import * as actions from '@/redux/actions';
import {debounce} from '@core/utils';

export class Header extends ExcelComponent {
    static className = 'excel__header';

    constructor($root, options) {
        super($root, {
            name: 'Header',
            subscribe: ['tableTitle'],
            listeners: ['input'],
            ...options
        });
    }

    prepare() {
        this.onInput = debounce(this.onInput, 300)
    }

    toHTML(state) {
        return ` 
        <input type="text" class="input" value="${state.tableTitle}"/>
        <div>
            <div class="button">
                <i class="material-icons">exit_to_app</i>
            </div>
            <div class="button">
                <i class="material-icons">delete</i>
            </div>
        </div>`
    }

    onInput(event){
        this.$dispatch(actions.changeHeaderTitle({
            value: $(event.target).text()
        }))
    }
}