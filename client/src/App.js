import React, { Component } from 'react';
import './App.css';
import DogList from './DogList';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import DogDeTail from './DogDeTail';

class App extends Component {  
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DogList}/> 
        <Route exact path="/dogs/:id" component={DogDeTail}/> 
      </Switch>
      
     </BrowserRouter>
    
    );
}}

export default App;
//might need "exact" on line 12