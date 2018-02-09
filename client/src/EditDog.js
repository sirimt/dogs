import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditDog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeTemperament = this.handleChangeTemperament.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  componentWillMount() {
    this.setState(
      this.props.dogs.find(dog => dog.id === parseInt(this.state.id))  
    )
  }

    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeAge(event) {
      this.setState({age: event.target.value});
    }
    handleChangeTemperament(event) {
      this.setState({temperment: event.target.value});
    }
    handleSubmit(event) {
      event.preventDefault()
      var updateDog = this.state;
      this.props.updateDog(parseInt(this.state.id), updateDog);
    }

  render() {
    
    return (
      <div>
     <form onSubmit={this.handleSubmit} >
          Name:<br/>
          <input type="text" name="name" onChange={this.handleChangeName} value={this.state.name}/><br/>
          Age:<br/>
          <input type="number" name="age" onChange={this.handleChangeAge} value={this.state.age}/><br/>
          Temperament:<br/>
          <input type="text" name="temperment" onChange={this.handleChangeTemperament} value={this.state.temperment}/><br/>
          <button>Update Dog!</button> 
          <Link to={'/'}><button>Back to DogList</button></Link>                               
        </form>
        </div>
    );
  }
}

export default EditDog;
