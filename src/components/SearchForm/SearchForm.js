import React, { Component } from "react";
import "./SearchForm.css";
import Results from "../Results/Results";
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner1Name: "",
      server1: "na",
      summoner2Name: "",
      server2: "na",
      results: false
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
    const { summoner1Name, server1, summoner2Name, server2 } = this.state;
    const { gameMode } = this.props;

    const url = `/api/mmr/test`;

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        summonerName: this.state.summoner1Name,
        server: this.state.server1,
        gameMode: this.props.gameMode
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          mmr1: data.avg
        });
      })
      .then(r =>
        console.log(
          this.state.summoner1Name + this.state.server1 + this.state.mmr1
        )
      )
      .catch(e => {
        this.setState({
          error1: "no MMR data for summoner1"
        });
      });

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        summonerName: this.state.summoner2Name,
        server: this.state.server2,
        gameMode: this.props.gameMode
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          mmr2: data.avg
        });
      })
      .then(r =>
        console.log(
          this.state.summoner2Name + this.state.server2 + this.state.mmr2
        )
      )
      .catch(e => {
        this.setState({
          error2: "no MMR data for summoner2"
        });
      });

    console.log(this.state);
    this.state.results = true;
    // this.props.history.push({
    //   pathname: `/${this.props.gameMode}/results`,
    //   state: {
    //     gameMode: this.props.gameMode,
    //     mmr1: this.state.mmr1,
    //     mmr2: this.state.mmr2
    //   }
    // });
  };

  render() {
    console.log(this.state);
    // let results = this.state.results ? (
    // <div className="Results">
    //   <Results results={this.state} />
    // </div>
    // ) : (
    //   <div className="Results">No results</div>
    // );
    let results;
    if (this.state.error1 && this.state.error2) {
      results = "Both summoners do not exist";
    } else if (this.state.error1) {
      results = "Summoner 1 does not exist";
    } else if (this.state.error2) {
      results = "Summoner 2 does not exist";
    }
    // else if (this.state.mmr1 == null && this.state.mmr2 == null) {
    //   results = "no MMR data for both summoners";
    // } else if (this.state.mmr1 == null) {
    //   results = "no MMR data for summoner 1";
    // } else if (this.state.mmr2 == null) {
    //   results = "no MMR data for summoner 2";
    // }
    else if (this.state.results && !this.state.error1 && !this.state.error2) {
      results = (
        <div className="Results">
          <Results results={this.state} />
        </div>
      );
    }
    return (
      <div>
        <form
          className="form-horizontal"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <div className="flexform">
            <div>
              {" "}
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Summoner 1 Name"
                    name="summoner1Name"
                    required="required"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <select
                    name="server1"
                    defaultValue="na"
                    className="form-control"
                  >
                    <option value="na">North America</option>
                    <option value="euw">EU West</option>
                    <option value="eune">EU Nordic & East</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Summoner 2 Name"
                    name="summoner2Name"
                    required="required"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <select
                    name="server1"
                    defaultValue="na"
                    className="form-control"
                  >
                    <option value="na">North America</option>
                    <option value="euw">EU West</option>
                    <option value="eune">EU Nordic & East</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group select-btn">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Search</button>&nbsp;&nbsp;
            </div>
          </div>
        </form>
        {results}
      </div>
    );
  }
}
export default withRouter(SearchForm);
