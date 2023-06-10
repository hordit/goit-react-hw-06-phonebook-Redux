import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {rootReducer} from './reducer';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReduser = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReduser);
export const persistor = persistStore(store);
