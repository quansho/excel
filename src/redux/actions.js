import {CHANGE_TEXT,
    CHANGE_STYLES,
    TABLE_RESIZE,
    APPLY_STYLES,
    UPDATE_DATE,
    CHANGE_HEADER_TITLE
} from './types';

export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data
    }
}

export function changeCurrent(data) {
    return {
        type: CHANGE_TEXT,
        data
    }
}

export function changeHeaderTitle(data) {
    return {
        type: CHANGE_HEADER_TITLE,
        data
    }
}

export function changeStyles(data) {
    return {
        type: CHANGE_STYLES,
        data
    }
}

// values, ids
export function applyStyles(data) {
    return {
        type: APPLY_STYLES,
        data
    }
}

export function updateDate() {
    return {
        type: UPDATE_DATE
    }
}
