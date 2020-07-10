import {clone} from '@core/utils';
import {defaultStyles, defautTitle} from '@/const';

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentStyles: defaultStyles,
    currentText: '',
    openedDate: new Date().toJSON(),
    tableTitle: defautTitle,
    openedIn: new Date().toJSON()

}

const normalize = state => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
})

export function normalizeInitialState(state) {
    return state ? normalize(state) : clone(defaultState)
}
