import React, { Component } from "react";
class App extends Component {
  state = {
    maxConsecutivesOf1: [],
  };
  componentDidMount() {
    let binaryValue = prompt("enter the binary value");
    let max_count = 0;
    let count = 0;
    for (let i = 0; i < binaryValue.length; i++) {
      if (binaryValue[i] === "1") {
        count = count + 1;
        if (binaryValue.length === i + 1) {
          if (max_count < count) {
            max_count = count;
          }
        }
      } else {
        if (max_count < count) {
          max_count = count;
        }
        count = 0;
      }
    }
    this.setState({ maxConsecutivesOf1: max_count });
  }
  render() {
    return (
      <React.Fragment>
        <h1>maximum consecutives of 1:{this.state.maxConsecutivesOf1}</h1>
      </React.Fragment>
    );
  }
}

export default App;
