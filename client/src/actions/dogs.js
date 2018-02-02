let nextDogId = 0;

export const ADD_DOG = 'ADD_DOG';

export function addDog(dog) {
  console.log(dog);
  return {
    type: ADD_DOG,
    dog: Object.assign({}, dog, {id: ++nextDogId})
  }
}