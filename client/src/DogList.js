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
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeTemperment = this.handleChangeTemperment.bind(this);    
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

  handleChangeName(event) {
    this.setState({newName: event.target.value});
  }
  handleChangeAge(event) {
    this.setState({newAge: event.target.value});
  }
  handleChangeTemperment(event) {
    this.setState({newTemperment: event.target.value});
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
      return <li key={dog.id} ><Link to={"/dogs/" + dog.id}> { dog.name } </Link>
      <button onClick={(e) => this.handleDeleteDog(dog.id, e)} type="button">Delete Me!</button></li>
    });
    
    return (
      <div>
        <ul>
          { dogNames } 
        </ul>
        <form onSubmit={this.handleSubmit} >
          Name:<br/>
          <input type="text" onChange={this.handleChangeName}/><br/>
          Age:<br/>
          <input type="number" onChange={this.handleChangeAge}/><br/>
          Temperment:<br/>
          <input type="text" onChange={this.handleChangeTemperment}/><br/>
          <button>Submit!</button> 
        </form>
        </div>
    );
  }
}

export default DogList;
