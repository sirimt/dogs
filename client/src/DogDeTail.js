import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// import axios from 'axios';

class DogDeTail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    };

  }
  componentWillMount() {
    this.setState(
      this.props.dogs.find(dog => dog.id === parseInt(this.state.id))  
    )
    console.log(this.state);
  }


  render() {
    
    return (
      <div>
          Name: {this.state.name}<br/>
          Age: {this.state.age}<br/>
          Temperament: {this.state.temperment}<br/>
          <Link to={'/'}><button>Back to Dog List</button></Link> 
          <Link to={'/dogs/update/'+this.state.id}><button>Edit</button></Link>
        </div>
    );
  }
}

export default DogDeTail;
