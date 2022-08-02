import { combineReducers } from 'redux';
import { actionsType } from '../actions/actions';
import { InitialStateType, Action } from './reducer.types';

const initialState: InitialStateType = {
    searchResult: null,
    selectedResult: null,
    gallery: null,
    loading: false,
    error: ''
}

const reducer = (state: InitialStateType = initialState, action: Action) => {
    switch (action.type) {
        case actionsType.UPDATE_SEARCH_RESULT:
            return { ...state, searchResult: action.searchResult }
        case actionsType.UPDATE_SELECTED_IMAGE:
            return { ...state, selectedResult: action.selectedResult }
        case actionsType.LOADING:
            return { ...state, loading: action.loading }
        case actionsType.UPDATE_GALLERY:
            return { ...state, gallery: action.gallery }
        case actionsType.SHOW_ERROR:
            return { ...state, error: action.error }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    app: reducer
})

export default rootReducer;