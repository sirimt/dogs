import {
  ADD_DOG,
  DELETE_DOG
} from '../actions/dogs'


const initialState = [
  {
		id: 0,
    name: 'Thunder Monkey',
    age: 6,
    temperment: 'cool'

  }
]

export default function dogs(state = initialState, action) {
  switch (action.type) {
    case ADD_DOG:
      return [
        ...state,
        {
          id: action.dog.id,
          name: action.dog.name,
          age: action.dog.age,
          temperment: action.dog.temperment
        }
      ]
      case DELETE_DOG:
          const newState = Object.assign([], state);
          const indexOfDogToDelete = state.findIndex(dog => {
            return dog.id === action.dog.id;
          })
          newState.splice(indexOfDogToDelete, 1);
          return newState;
    default:
      return state
  }
}
