const initalState = [
  {
    id: 0,
    name: 'Carol Wu',
    email: 'carol@test.com',
    phone: 1912345678
  },
  {
    id: 1,
    name: 'Anna Wang',
    email: 'anna@test.com',
    phone: 1922345678
  },
  {
    id: 2,
    name: 'Ivy Cheng',
    email: 'ivy@test.com',
    phone: 1932345678
  }
]

const contactReducer = (state = initalState, action) => {
  switch(action.type){
    case 'ADD_CONTACT':
      state = [...state, action.payload]
      return state
    case 'UPDATE_CONTACT':
      const updateState = state.map(contact => contact.id + 1 === action.payload.id ? action.payload : contact)
      state = updateState
      return state
    case 'DELETE_CONTACT':
      const filterState = state.filter(contact => contact.id + 1 !== action.payload ? contact : null)
      state = filterState
      return state
    default:
      return state
  }
}

export default contactReducer