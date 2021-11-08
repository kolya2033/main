import {
    CHANGE_LANGUAGE,
    GET_POPULAR_REPOS_REQUEST, GET_POPULAR_REPOS_REQUEST_SUCCESS, GET_POPULAR_REPOS_REQUEST_FAILURE
} from "../constants/app.constants";

export const changeLanguage = (payload) => ({
    type: CHANGE_LANGUAGE,
    payload
})

export const getPopularReposRequestAction = () => ({
    type: GET_POPULAR_REPOS_REQUEST,
})

export const getPopularReposRequestSuccessAction = (payload) => ({
    type: GET_POPULAR_REPOS_REQUEST_SUCCESS,
    payload
})

export const getPopularReposRequestFailureAction = (payload) => ({
    type: GET_POPULAR_REPOS_REQUEST_FAILURE,
    payload
})
