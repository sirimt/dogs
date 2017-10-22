import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class DogDeTail extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
        newName: "",
        newAge: 0,
        newTemperment: ""
    };
    
  }
  componentDidMount() {
    axios.get('/api/dogs/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          id: response.data.id,
          newName: response.data.name,
          newAge: response.data.age,
          newTemperment: response.data.temperment

          
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
          Temperment: {this.state.newTemperment}<br/>
          <Link to={'/'}><button>Back to Dog List</button></Link> 
          
        </div>
    );
  }
}

export default DogDeTail;
