import { AsyncStorage as PersistStorage } from "react-native";
import { createStore, applyMiddleware, Store as ReduxStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import R from "ramda";

import { rootReducer, rootSaga } from "./index";
import createImmutableTransform from "./ImmutablePersistenceTransform";
// import printReduxDirectory from './FileSystemReader';

/* ------------- DEVELOP CONFIGS ------------- */
const USE_LOGGING = true;
const PURGE_ALL_PERSISTED_DATA = false;

/* ------------- Redux Configuration ------------- */
const middleware = [];
// tells for which REDUCERS we want to store data to the persistence store
const persistWhitelist = ["settings"];
// tells for which REDUCERS we do NOT want to have the Immutuable-Transform-Filter aplied
const immutableBlacklist = [];

/* ------------- Saga Middleware ------------- */

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

/* ------------- Logger Middleware ------------- */

if (process.env.NODE_ENV !== "production" && USE_LOGGING) {
  // create the logger
  const logger = createLogger({});
  middleware.push(logger);
}

/* ------------- Assemble Store ------------- */

const rootPersistConfig = {
  key: "root",
  storage: PersistStorage,
  whitelist: persistWhitelist,
  transforms: [createImmutableTransform(immutableBlacklist)]
};

const persistentReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = createStore(
  persistentReducer,
  applyMiddleware(...middleware)
);
sagaMiddleware.run(rootSaga);

const pStore = persistStore(store);

if (process.env.NODE_ENV !== "production" && PURGE_ALL_PERSISTED_DATA) {
  pStore.purge();
}

export const persistor = pStore;
