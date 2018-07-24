import React, { Component } from 'react';

class Stats extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.userName}</h1>
        <h2>{this.props.rank}</h2>
        <img src={this.props.icon}></img>
      </div>
    );
  }

}

export default Stats;
