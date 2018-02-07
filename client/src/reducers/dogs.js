import {
  ADD_DOG,
  DELETE_DOG,
  UPDATE_DOG
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
      return state.filter(dog =>
        dog.id !== action.id
      )
      case UPDATE_DOG:
          return state.map((s) => {
            if (s.id !== action.dog.id) {
              return s;
            }
            return action.dog;
          });
    default:
      return state
  }
}
