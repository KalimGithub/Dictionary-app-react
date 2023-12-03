import {SEARCH_WORD} from './actionType.js';

export const searchWord = (word) => {
    return ({
        type: SEARCH_WORD,
        payload: word
    })
}