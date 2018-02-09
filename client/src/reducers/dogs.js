import {
  ADD_DOG,
  DELETE_DOG,
  UPDATE_DOG,
  FETCH_DOG_FULFILLED,
  ADD_DOG_FULFILLED
} from '../actions/dogs'


const initialState = {
  dogs: []
}

export default function dogs(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOG_FULFILLED:
      return {
        ...state,
        dogs: action.payload.data
  
      }
    case ADD_DOG_FULFILLED:
      return {
        ...state,
        dogs: [...state.dogs, action.payload.data]    
        }
      case DELETE_DOG:
      return state.filter(dog =>
        dog.id !== action.id
      )
      case UPDATE_DOG:
      return state.map(dog =>
        dog.id === action.id ?
          action.dog :
          dog
      )
    default:
      return state
  }
}
