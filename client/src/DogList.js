import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
        newName: "",
        newAge: 0,
        newTemperment: ""
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
      temperment: this.state.newTemperment
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
          Temperment:<br/>
          <input type="text" name= "newTemperment" onChange={this.handleChange}/><br/>
          <button>Submit!</button> 
        </form>
      </div>
    );
  }
}

export default DogList;
