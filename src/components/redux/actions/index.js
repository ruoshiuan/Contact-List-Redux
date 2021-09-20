export const addContact = (data) => {
  return {
    type: 'ADD_CONTACT',
    payload: data
  }
}
export const updateContact = (data) => {
  return {
    type: 'UPDATE_CONTACT',
    payload: data
  }
}