import React, { Component } from 'react';
import Player from '../../components/Player/Player';
import { withRouter } from "react-router-dom";

import './SearchPage.css';

// eslint-disable-next-line 
var riotURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/doublelift?api_key='+process.env.REACT_APP_RIOT_API_KEY;

// eslint-disable-next-line 
var mmrURL = 'https://na.whatismymmr.com/api/v1/summoner?name=';

class SearchPage extends Component {
  state = {

  };

  sendMode(e) {
    console.log (e.target.value); 
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }
  onChange = (e) => {
      console.log(e.target.value)
    this.props.history.push(`/${e.target.value}`);
  }
  render() {
      console.log(this.props.gameMode)
    return (
      <div className="SearchPage">

        <h2>{this.props.gameMode}</h2>
        <form>
          <label>Game Mode 
          <select onChange={this.onChange} defaultValue={this.props.gameMode}>
      <option disabled value="default"> -- select an option -- </option>
        <option value="ranked">Ranked</option>
        <option value="normal">Normal</option>
        <option value="ARAM">ARAM</option>
      </select>
          </label>
        </form>
        <div className="PlayerForms">
        < Player 
        gameMode={this.props.gameMode} 
        playerNumber = "1"
        />
        < Player 
        gameMode={this.props.gameMode} 
        playerNumber = "2"
        />
        </div>
      </div>
    );
  }
}
export default withRouter (SearchPage);