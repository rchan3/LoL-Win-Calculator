import React, { Component } from "react";

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summonerName: "",
      server: "na",
      mmr: 0
      // gameMode: this.props.gameMode
    };
  }

  // componentDidUpdate() {
  //   if (this.props.gameMode !== this.state.gameMode) {
  //     this.setState({ gameMode: this.props.gameMode });
  //   }
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // const data = new FormData(event.target);
    // console.log(this.state);
    const { summonerName, server } = this.state;
    const { gameMode } = this.props;

    const url = `/api/mmr/test`;

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        summonerName: this.state.summonerName,
        server: this.state.server,
        gameMode: this.props.gameMode
      })
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          mmr: data.avg
        })
      )
      .then(r => console.log(this.state.mmr))
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div>
        <header className="header-footer">
          Player {this.props.playerNumber}
        </header>
        <form
          className="form-horizontal"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Summoner Name"
                name="summonerName"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <select name="server" defaultValue="na">
                <option value="na">North America</option>
                <option value="euw">EU West</option>
                <option value="eune">EU Nordic & East</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Search</button>&nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Player;
