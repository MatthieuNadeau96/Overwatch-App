import React, { Component } from 'react';

class Stats extends Component {

  render() {
    return (
      <div>
        {this.props.userName && <h1>{this.props.userName}</h1>}
        {this.props.icon && <img src={this.props.icon} alt="player icon"/>}
        {this.props.rank && <h2>{this.props.rank}</h2>}
        {this.props.rankIcon && <img src={this.props.rankIcon} alt="rank icon"/>}
        {this.props.gamesWon && <p>Record: {this.props.gamesWon} - {this.props.gamesLost} - {this.props.gamesTied}</p>}
        {this.props.timePlayed && <p>Time Played: {this.props.timePlayed}</p>}
      </div>
    );
  }

}

export default Stats;
