import contactsData from '../Data/Contacts.json';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { nanoid } from 'nanoid';

const initialState = {
  items: contactsData,
  filter: '',
};

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

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

const contactsReducer = (state = initialState, action) => {
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
