import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
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

  render() {
    let dogNames = this.state.dogs.map( (dog) => {
      return <li>{ dog.name }</li>
    });
    
    return (
      <ul>
        { dogNames }
      </ul>
    );
  }
}

export default App;
