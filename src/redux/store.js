import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {appReducer} from "./reducers/app.reducer";

const logger = createLogger({
    collapsed: true
});

const store = createStore(
    combineReducers({
        appReducer,
    }),
    applyMiddleware(thunk, logger)
);

export default store;
