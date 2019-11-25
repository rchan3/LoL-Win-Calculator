import React, { Component } from 'react';

class Player1 extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    state = {
      summonername: '',
      server: '',
      gamemode: '',
    };
    handleChange = (e) => {
    }
    handleSubmit = (e) => {
      e.preventDefault();
    }
    

    render() {
      return (
        <div>
          <header className="header-footer">Player 1</header>
          <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Summoner Name" value={this.state.summonername} name="Summoner Name" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <select name="server value={this.state.server}">
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
  export default Player1;