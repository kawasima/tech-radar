import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'

export const browserHistory = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware,
    routerMiddleware(browserHistory),
    createLogger()))

export const runSaga = sagaMiddleware.run

export default store
