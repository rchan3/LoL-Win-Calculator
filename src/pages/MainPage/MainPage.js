import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Player1 from '../../components/Player1/Player1'
import Player2 from '../../components/Player2/Player2.js'
import './MainPage.css';

var riotURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/doublelift?api_key='+process.env.REACT_APP_RIOT_API_KEY;

var mmrURL = 'https://na.whatismymmr.com/api/v1/summoner?name=';

class MainPage extends Component {

  handleChange = (e) => {
    // TODO: implement in an elegant way
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="MainPage">
        <h2>HOME</h2>
        <Link className='btn' to='/login'>Login</Link>
        <Link className='btn' to='/signup'>Sign Up</Link>
        <h2>api test</h2>
        <form>
          <label>Game Mode 
            <select name="Game Mode">
              <option>Ranked</option>
              <option>Normal</option>
              <option>ARAM</option>
            </select>
          </label>
        </form>
        <div className="PlayerForms">
        < Player1 />
        < Player2 />
        </div>
      </div>
    );
  }
}
export default MainPage;