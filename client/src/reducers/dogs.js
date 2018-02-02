import {
  ADD_DOG
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
          name: action.dog.name,
          age: action.dog.age,
          temperment: action.dog.temperment
        }
      ]
    default:
      return state
  }
}
