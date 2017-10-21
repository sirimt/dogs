import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class DogDeTail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
        newName: "",
        newAge: 0,
        newTemperment: ""
    };
    
  }
  componentWillMount() {
    axios.get('/api/dogs/' + this.params.id)
      .then((response) => {
        this.setState({
          dogs: response.data
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

export default DogDeTail;
