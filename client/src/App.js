import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import DogList from './DogList';
import DogDeTail from './DogDeTail';
import EditDog from './EditDog';
import * as dogActions from './actions/dogs';
import { bindActionCreators } from 'redux';

class App extends Component {  
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props)
  }
  
  render() {
      return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={ ({ match, history, dogs, action }) => <DogList match={ match } history={ history } dogs={ this.props.dogs } action={ this.props.actions.addDog }/>} /> 
              <Route exact path="/dogs/:id" render={ ({ match, history }) => <DogDeTail match={ match } history={ history } accessToken={ this.state.accessToken }/>} />
              <Route exact path="/dogs/update/:id" render={ ({ match, history }) => <EditDog match={ match } history={ history } accessToken={ this.state.accessToken }/>} />
            </Switch>
          </BrowserRouter>
          {/* 
            Pass down setAccessToken method to the child component "Login" via "onLogin" property
          */}
          {/* <LogIn onLogin={ this.setAccessToken }/> */}
        </div>
      ); 
	}
}

const mapStateToProps = state => ({
  dogs: state.dogs
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(dogActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

