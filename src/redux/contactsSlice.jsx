import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { nanoid } from 'nanoid';
import contactsData from '../Data/Contacts.json';

export const getContacts = state => state.items;
export const getFilter = state => state.filter;

const initialState = {
  items: contactsData,
  filter: '',
};

export const addContact = (name, number) => ({
  type: 'contacts/addContact',
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: 'contacts/deleteContact',
  payload: contactId,
});

export const setFilter = filter => ({
  type: 'contacts/setFilter',
  payload: filter,
});

export const contactsReducer = (state = initialState, action) => {
   console.log('Current state:', state);
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case 'contacts/deleteContact':
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload)
      }
    case 'contacts/setFilter':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedReducer = persistReducer(persistConfig, contactsReducer);
