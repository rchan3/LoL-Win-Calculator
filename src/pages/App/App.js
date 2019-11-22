import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

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
        </Switch>
      </div>
    );
  }
}
export default App;
