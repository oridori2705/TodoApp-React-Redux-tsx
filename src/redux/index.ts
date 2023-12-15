import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { tasks } from './tasks'
import { composeWithDevTools } from 'redux-devtools-extension'
import session from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  storage: session,
  whitelist: ['tasks']
}

const combinedReducer = combineReducers({ tasks })

export const rootReducer = persistReducer(persistConfig, combinedReducer)

export const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(logger))
)

export const persistor = persistStore(store as any)

export type RootState = ReturnType<typeof rootReducer>
