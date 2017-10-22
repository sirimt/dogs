import React, { Component } from 'react';
import './App.css';
import DogList from './DogList';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import DogDeTail from './DogDeTail';
import EditDog from './EditDog';

class App extends Component {  
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DogList}/> 
        <Route exact path="/dogs/:id" component={DogDeTail}/> 
        <Route exact path="/EditDog/:id" component={EditDog}/> 
      </Switch>
      
     </BrowserRouter>
    
    );
}}

export default App;
