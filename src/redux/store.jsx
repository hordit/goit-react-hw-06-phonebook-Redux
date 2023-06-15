import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './contactsSlice';
import thunk from 'redux-thunk';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const ignoreSerializableActions = () => (next) => (action) => {
    if (action.type && [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER].includes(action.type)) {
      return;
    }
    return next(action);
  };
  
  const middleware = [ignoreSerializableActions, thunk];
  
  export const store = createStore(persistedReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);
