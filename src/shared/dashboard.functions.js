import {storage} from '@core/utils';

function toHtml(key) {
    const model = storage(key)
    const url = key.split(':')[1]
    return `
     <li class="db__record">
            <a href="/#excel/${url}">${model.tableTitle}</a>
            <strong>
             ${new Date(model.openedIn).toLocaleDateString()}
             ${new Date(model.openedIn).toLocaleTimeString()}
            </strong>
    </li>
    `
}

function getAllKeys() {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (!key.includes('excel')) {
            continue
        }
        keys.push(key)
    }
    return keys
}


export function createRecordsTable() {
    const keys = getAllKeys()

    if (!keys.length) {
        return `<p>Нет Записей</p>`
    }

    return `
        <div class="db__list-header">
            <span>Название</span>
            <span>Дата открытия</span>
        </div>

        <ul class="db__list">
            ${keys.map(toHtml).join('')}
        </ul>
        `
}