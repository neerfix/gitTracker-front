import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
};

export const reducers = combineReducers({
});

const defaultStore = {
  user: ''
};

const rootReducer = (state, action) => {
  return reducers(state, action)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  persistedReducer,
  defaultStore,
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  )
);

export const persistor = persistStore(store);
