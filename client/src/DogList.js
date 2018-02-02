import React, { Component } from 'react';
// import DOGADD from './DogList';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import './App.css';


class DogList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      dogs: [],
        name: "",
        age: 0,
        temperment: ""
    }  
    this.handleDeleteDog = this.handleDeleteDog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    console.log(this.props)
    // axios.get('/api/dogs')
    //   .then((response) => {
    //     this.setState({
    //       dogs: response.data
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  handleDeleteDog(dog) {
   this.props.delete({
      dog
   })
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});

  }
  // handleInputChange(e) {

  //   this.setState({
  //     [e.target.name]: e.target.value 
  //   });
  // }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props)
    this.props.action({
      name: this.state.name,
      age: this.state.age,
      temperment: this.state.temperment
    })
  }

  render() {
   console.log(this.props)
    let dogNames = this.props.dogs.map( (dog) => {
      return (
        <li key={dog.id} ><Link to={'/dogs/' + dog.id}> { dog.name } </Link>
        <button onClick={(e) => this.handleDeleteDog(dog, e)} type="button">Delete Me!</button></li>
      )
    });
    
    return (
      <div>
        <ul>
          { dogNames } 
        </ul>
        <form onSubmit={this.handleSubmit} >
          Name:<br/>
          <input type="text" name="name" onChange={this.handleChange}/><br/>
          Age:<br/>
          <input type="number" name="age" onChange={this.handleChange}/><br/>
          Temperament:<br/>
          <input type="text" name= "temperment" onChange={this.handleChange}/><br/>
          <button>Submit!</button> 
        </form>
      </div>
    );
  }
}

export default DogList;
