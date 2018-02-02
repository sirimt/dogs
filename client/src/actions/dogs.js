let nextDogId = 0;

export const ADD_DOG = 'ADD_DOG';

export function addDog(dog) {
  console.log(dog);
  return {
    type: ADD_DOG,
    dog: Object.assign({}, dog, {id: ++nextDogId})
  }
}
export const DELETE_DOG = 'DELETE_DOG';

export function deleteDog(dog) {
  console.log(dog);
  return {
    type: DELETE_DOG,
    dog: dog
  }
}