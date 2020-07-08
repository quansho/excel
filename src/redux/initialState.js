import {storage} from '@core/utils';
import {defaultStyles, defautTitle} from '@/const';

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentStyles: defaultStyles,
    currentText: '',
    tableTitle: defautTitle,

}

export const initialState = storage('excel-state') ?
    storage('excel-state') :
    defaultState