import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
    this.handleClick = this.handleClick.bind(this);
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
  handleClick(id) {
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

  render() {
    let dogNames = this.state.dogs.map( (dog) => {
      return <li key={dog.id} >{ dog.name } <button onClick={(e) => this.handleClick(dog.id, e)} type="button">Delete Me!</button></li> 
    });
    
    return (
      <ul>
        { dogNames } 
      </ul>
    );
  }
}

export default App;
