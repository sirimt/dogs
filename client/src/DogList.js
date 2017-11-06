import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';


class DogList extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
        newName: "",
        newAge: 0,
        newTemperament: ""
    };
    this.handleDeleteDog = this.handleDeleteDog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    axios.get('/api/dogs')
      .then((response) => {
        this.setState({
          dogs: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleDeleteDog(id) {
    console.log(id);
    var newDogList = this.state.dogs;
    for (var i = 0; i < newDogList.length; i++) {
      if ( id === newDogList[i].id) {
        newDogList.splice(i,1);
      }
    }
    axios.delete('/api/dogs/'+id)
    .then((response) => {
      console.log(response);
      this.setState({
        dogs: newDogList
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});

  }

  handleSubmit(event) {
    var newDogList = this.state.dogs;
    axios.post('/api/dogs/', {
      name: this.state.newName,
      age: this.state.newAge,
      temperament: this.state.newTemperament
    })
    .then((response) => {
      newDogList.push(response.data);          
      console.log(response);
      this.setState({
        dogs: newDogList
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
   
    let dogNames = this.state.dogs.map( (dog) => {
      return (
        <li key={dog.id} ><Link to={'/dogs/' + dog.id}> { dog.name } </Link>
        <button onClick={(e) => this.handleDeleteDog(dog.id, e)} type="button">Delete Me!</button></li>
      )
    });
    
    return (
      <div>
        <ul>
          { dogNames } 
        </ul>
        <form onSubmit={this.handleSubmit} >
          Name:<br/>
          <input type="text" name="newName" onChange={this.handleChange}/><br/>
          Age:<br/>
          <input type="number" name="newAge" onChange={this.handleChange}/><br/>
          Temperament:<br/>
          <input type="text" name= "temperament" onChange={this.handleChange}/><br/>
          <button>Submit!</button> 
        </form>
      </div>
    );
  }
}

export default DogList;
