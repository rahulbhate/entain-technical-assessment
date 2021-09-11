import { applyMiddleware, compose, createStore } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import logger from 'redux-logger'
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from 'redux/reducers'

export default function ConfigureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  return createStore(
    persistedReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(logger, thunk, reduxImmutableStateInvariant())
    )
  )
}
