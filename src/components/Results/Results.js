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
    return 1 / (1 + 1 * Math.pow(10, (1.0 * (rating1 - rating2)) / 400));
  }
  render() {
    const p1Rate = this.Probability(
      this.props.results.mmr1,
      this.props.results.mmr2
    );
    const p2Rate = this.Probability(
      this.props.results.mmr2,
      this.props.results.mmr1
    );

    console.log(this.props.results);
    // let result;
    // if (this.props.results == false) {
    //   result = <p></p>;
    // } else if (this.props.results == true) {
    //   result = <p>test</p>;
    // }
    return (
      <div>
        <div className="p1win">{p1Rate}</div>
        <div className="p2win">{p2Rate}</div>
      </div>
    );
  }
}
export default withRouter(Results);
