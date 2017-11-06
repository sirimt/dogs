import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

class DogDeTail extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
        newName: "",
        newAge: 0,
        newTemperament: ""
    };

  }
  componentDidMount() {
    axios.get('/api/dogs/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          id: response.data.id,
          newName: response.data.name,
          newAge: response.data.age,
          newTemperament: response.data.temperament

          
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    
    return (
      <div>
          Name: {this.state.newName}<br/>
          Age: {this.state.newAge}<br/>
          Temperament: {this.state.newTemperament}<br/>
          <Link to={'/'}><button>Back to Dog List</button></Link> 
          <Link to={'/EditDog/'+this.state.id}><button>Edit</button></Link>
        </div>
    );
  }
}

export default DogDeTail;
