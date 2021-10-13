import { combineReducers, createStore, applyMiddleware  } from "redux";
import createSagaMiddleware from "redux-saga";
import norrisReducer from "./norris/norris";
import { watcherSaga } from "./saga/rootSaga";

const reducer = combineReducers({
    norris: norrisReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga)

export default store;