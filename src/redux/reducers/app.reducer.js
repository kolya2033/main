import {CHANGE_LANGUAGE, GET_POPULAR_REPOS_REQUEST, GET_POPULAR_REPOS_REQUEST_SUCCESS, GET_POPULAR_REPOS_REQUEST_FAILURE} from "../constants/app.constants";

const initialState = {
    loading: false,
    selectedLanguage: 'All',
    repos: null,
    error: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload
            }
            
        case GET_POPULAR_REPOS_REQUEST:
            return {
                ...state,
                loading: true,
                repos: null,
                error: null
            }

        case GET_POPULAR_REPOS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                repos: action.payload,
                error: null
            }

        case GET_POPULAR_REPOS_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
