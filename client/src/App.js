import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import DogList from './DogList';
import DogDeTail from './DogDeTail';
import EditDog from './EditDog';
import LogIn from './LogIn';

class App extends Component {  
  constructor() {
    super();
    this.state = {
      accessToken:""
    }
   
    this.setAccessToken = this.setAccessToken.bind(this);
  }

  setAccessToken(newAccessToken)
  {
    this.setState({
      accessToken: newAccessToken
    })
  }
  
  render() {
      return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={ ({ match, history }) => <DogList match={ match } history={ history } accessToken={ this.state.accessToken }/>} /> 
              <Route exact path="/dogs/:id" render={ ({ match, history }) => <DogDeTail match={ match } history={ history } accessToken={ this.state.accessToken }/>} />
              <Route exact path="/dogs/update/:id" render={ ({ match, history }) => <EditDog match={ match } history={ history } accessToken={ this.state.accessToken }/>} />
            </Switch>
          </BrowserRouter>
          {/* 
            Pass down setAccessToken method to the child component "Login" via "onLogin" property
          */}
          <LogIn onLogin={ this.setAccessToken }/>
        </div>
      ); 
	}
}

export default App;

