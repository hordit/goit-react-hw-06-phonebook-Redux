import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './contactsSlice';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

export const store = createStore(persistedReducer,enhancer );
export const persistor = persistStore(store);
