import { combineReducers } from "redux";
import initialContacts from '../components/Data/Contacts.json';

export const contactsReducer = (state = initialContacts, action) => {
    switch (action.type) {
        case 'contacts/addContacts':
            return [...state, action.payload];
            case 'contacts/deleteContact':
                return state.filter(contact => contact.id !== action.payload);
                default:
                    return state;
    }
};

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'filter/setFilter':
            return action.payload;
            default:
                return state;
    }
};

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});
