import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index';
//import {loadState , saveState} from './models/localStorage';
//import throttle from 'lodash/throttle';
import createLogger from 'redux-logger';
//import promise from 'redux-promise';
/*Todo:thunk*/
const thunk = (store) => (next) => (action) =>
    typeof  action === 'function' ?
        action(store.dispatch) :
        next(action);


/*
const wrapDispatchWithMiddlewres = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware =>
        store.dispatch = middleware(store)(store.dispatch)
    )
};
*/

/*const logger = (store) => (next) => {
    if (!console.group) {
        return next;
    }
    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color:gray', store.getState());
        console.log('%c action', 'color:blue', action);
        const returnValue = next(action);
        console.log('%c next state', 'color:green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    };
};

const promise = (store) => (next) => (action) => {
    if (typeof action.then === 'function') {
        return action.then(next);
    }
    return next(action);
};*/

const configureStore = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    //wrapDispatchWithMiddlewres(store, middlewares);


    return createStore(
        reducer,
        /*persistedState.*/
        applyMiddleware(...middlewares));
};

export default configureStore;