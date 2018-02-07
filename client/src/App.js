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
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    console.log(this.props)
  }
  
  render() {
      return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={ ({ match, history, dogs }) => <DogList match={ match } history={ history } dogs={ this.props.dogs } action={ this.props.actions.addDog } delete={this.props.actions.deleteDog}/>} /> 
              <Route exact path="/dogs/:id" render={ ({ match, history }) => <DogDeTail match={ match } history={ history }/>} />
              <Route exact path="/dogs/update/:id" render={ ({ match, history }) => <EditDog match={ match } history={ history } updateDog={ this.props.actions.updateDog }/>} />
            </Switch>
          </BrowserRouter>
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

