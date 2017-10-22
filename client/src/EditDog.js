import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditDog extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
        newName: "",
        newAge: 0,
        newTemperment: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeTemperment = this.handleChangeTemperment.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  componentDidMount() {
    axios.get('/api/dogs/' + this.props.match.params.id)
      .then((response) => {
        //console.log(response);
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
      var updateDog = this.state;
      console.log (updateDog)
      axios.put('/api/dogs/'+ this.props.match.params.id, {
            id: this.state.id,
        name: this.state.newName,
        age: this.state.newAge,
        temperment: this.state.newTemperment
      })
      .then((response) => {
        updateDog.push(response.data);          
        console.log(response);
        this.setState({
          dogs: updateDog
        })
      })
      .catch((error) => {
        console.log(error);
      });
    }

  render() {
    
    return (
      <div>
     <form onSubmit={this.handleSubmit} >
          Name:<br/>
          <input type="text" onChange={this.handleChangeName} value={this.state.newName}/><br/>
          Age:<br/>
          <input type="number" onChange={this.handleChangeAge} value={this.state.newAge}/><br/>
          Temperment:<br/>
          <input type="text" onChange={this.handleChangeTemperment} value={this.state.newTemperment}/><br/>
          <button>Update Dog!</button> 
          <Link to={'/'}><button>Back to DogList</button></Link>                               
        </form>
        </div>
    );
  }
}

export default EditDog;
