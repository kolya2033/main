import {getPopularReposRequestAction, getPopularReposRequestSuccessAction, getPopularReposRequestFailureAction} from "../actions/app.actions";
import {getPopularReposRequest} from "../requests/app.requests";

export const getPopularRepos = (selectedLanguage) => (dispatch) => {
    dispatch(getPopularReposRequestAction());
    return getPopularReposRequest(selectedLanguage)
        .then(payload => dispatch(getPopularReposRequestSuccessAction(payload)))
        .catch(error => dispatch(getPopularReposRequestFailureAction(error)))
}
