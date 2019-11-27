import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import SearchPage from '../SearchPage/SearchPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }
  getInitialState() {
    return {
      testState: 'Hello'
    };
  }  

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div>
        <header>
          < NavBar 
          user={this.props.user}
          handleLogout={this.props.handleLogout}
          />
        </header>
        <h1>1v1APP</h1>
        <Switch>
          <Route exact path='/' render={() => 
              <MainPage
              />
            }/>
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
              <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
             <Route exact path='/normal' render={() => 
              <SearchPage
              gameMode="normal"
              />
            }/>
            <Route exact path='/ranked' render={() => 
              <SearchPage
              gameMode="ranked"
              />
            }/>
            <Route exact path='/ARAM' render={() => 
              <SearchPage
              gameMode="ARAM"
              />
            }/>
        </Switch>
      </div>
    );
  }
}
export default App;
