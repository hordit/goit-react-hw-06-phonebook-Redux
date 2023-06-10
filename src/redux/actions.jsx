export const addContact = newContact => {
  return {
    type: 'contacts/addContacts',
    payload: newContact,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = filter => {
  return {
    type: 'filter/setFilter',
    payload: filter,
  };
};
