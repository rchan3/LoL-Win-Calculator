import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitialState()};
  }
  getInitialState() {
    return {
      testState: 'Hello'
    };
  }  
  render() {
    return (
      <div>
        <header><h1>1v1APP</h1></header>
        <Switch>
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
              />
            }/>
            <Route exact path='/login' render={() => 
              <LoginPage
              />
            }/>
            <Route exact path='/' render={() => 
              <MainPage
              />
            }/>
        </Switch>
      </div>
    );
  }
}
export default App;
