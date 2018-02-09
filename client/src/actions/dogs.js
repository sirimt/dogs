import axios from 'axios';


// let nextDogId = 0;

export const ADD_DOG = 'ADD_DOG';
export const FETCH_DOG = 'FETCH_DOG';
export const FETCH_DOG_FULFILLED = 'FETCH_DOG_FULFILLED';
export const ADD_DOG_FULFILLED = 'ADD_DOG_FULFILLED';

export function addDog(dog) {
  console.log(dog);
  return {
    type: ADD_DOG,
    payload: axios.post('/api/dogs/', dog)
  }
}
export const DELETE_DOG = 'DELETE_DOG';

export function deleteDog(id) {
  return {
    type: DELETE_DOG,
    id: id
  }
}
export const UPDATE_DOG = 'UPDATE_DOG';

export function updateDog(id, dog) {
  return {
    type: UPDATE_DOG,
    id: id, 
    dog: dog
  }
}
export function fetchDogs() {
  return {
    type: FETCH_DOG,
    payload: axios.get('/api/dogs/')
  }
}