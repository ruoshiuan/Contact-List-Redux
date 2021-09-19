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
  }
]

const contactReducer = (state = initalState, action) => {
  switch(action.type){
    case 'ADD_CONTACT':
      return [...state, action.payload]
    default:
      return state
  }
}

export default contactReducer