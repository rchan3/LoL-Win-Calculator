import React, { Component } from "react";
import "./MainPage.css";
import { withRouter } from "react-router-dom";

// eslint-disable-next-line
var riotURL =
  "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/doublelift?api_key=" +
  process.env.REACT_APP_RIOT_API_KEY;

// eslint-disable-next-line
var mmrURL = "https://na.whatismymmr.com/api/v1/summoner?name=";

class MainPage extends Component {
  onChange = e => {
    this.props.history.push(`/${e.target.value}`);
  };
  render() {
    let checkLogin = this.props.user ? (
      <div className="SearchPage">
        <label>
          Game Mode
          <select
            onChange={this.onChange}
            defaultValue={"default"}
            className="form-control"
          >
            <option disabled value="default">
              {" "}
              -- select an option --{" "}
            </option>
            <option value="ranked">Ranked</option>
            <option value="normal">Normal</option>
            <option value="ARAM">ARAM</option>
          </select>
        </label>
      </div>
    ) : (
      <h2>log in to use the app</h2>
    );
    return <div>{checkLogin}</div>;
  }
}

export default withRouter(MainPage);
