import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import * as actions from '@/redux/actions';
import {debounce} from '@core/utils';
import {ActiveRoute} from '@core/routes/ActiveRoute';

export class Header extends ExcelComponent {
    static className = 'excel__header';

    constructor($root, options) {
        super($root, {
            name: 'Header',
            subscribe: ['tableTitle'],
            listeners: ['input', 'click'],
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
            <div class="button" data-button="remove">
                <i class="material-icons" data-button="remove">delete</i>
            </div>
            <div class="button" data-button="exit">
                <i class="material-icons" data-button="exit">exit_to_app</i>
            </div>
        </div>`
    }

    onInput(event){
        this.$dispatch(actions.changeHeaderTitle({
            value: $(event.target).text()
        }))
    }

    onClick(event){
        const $target = $(event.target)
        const $button = $target.data.button

        if($button === 'remove'){
            const decision =
                confirm('Вы действително хотите удалить эту таблицу?')

            if(decision){
                localStorage.removeItem('excel:' + ActiveRoute.param)
                ActiveRoute.navigate('')
            }
        }else if($button === 'exit'){
            ActiveRoute.navigate('')
        }
    }
}