import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Results extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {

  //     };
  //   }

  //   componentDidUpdate() {
  //     if (this.props.results !== this.state.results) {
  //       this.setState({ results: this.props.results });
  //     }
  //   }

  // Function to calculate the Probability

  Probability(rating1, rating2) {
    return (
      (1 / (1 + 1 * Math.pow(10, (1.0 * (rating1 - rating2)) / 400))) * 100
    );
  }
  render() {
    let showMMR;
    const p2Rate = this.Probability(
      this.props.results.mmr1,
      this.props.results.mmr2
    ).toFixed(2);

    const p1Rate = this.Probability(
      this.props.results.mmr2,
      this.props.results.mmr1
    ).toFixed(2);

    // if statements for null values
    if (this.props.results.mmr1 == null && this.props.results.mmr2 == null) {
      showMMR = "no MMR data for both summoners";
    } else if (this.props.results.mmr1 == null) {
      showMMR = "no MMR data for summoner 1";
    } else if (this.props.results.mmr2 == null) {
      showMMR = "no MMR data for summoner 2";
    } else {
      showMMR = (
        <div>
          <div className="p1win">
            {this.props.results.summoner1Name} win chance:{p1Rate}%
          </div>
          <div className="p2win">
            {this.props.results.summoner2Name} win chance:{p2Rate}%
          </div>
        </div>
      );
    }

    return <div>{showMMR}</div>;

    // return (
    //   <div>
    //     <div className="p1win">{p1Rate}</div>
    //     <div className="p2win">{p2Rate}</div>
    //   </div>
    // );
  }
}
export default withRouter(Results);
