import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import { forbiddenWordsMiddleware } from '../middleware';

export const sagaMiddleware = createSagaMiddleware();

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware, forbiddenWordsMiddleware, sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);
