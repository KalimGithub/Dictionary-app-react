import {SEARCH_WORD} from '../actions/actionType.js'

let initialState =  {
    searchWord: ''  
}

function searchReducer(state = initialState, actions){
        console.log(state, actions);
        switch (actions.type) {
            case SEARCH_WORD:
                return {
                    ...state,
                    searchWord: actions.searchWord
                }
            default:
                return state;
        }
}

export default searchReducer;