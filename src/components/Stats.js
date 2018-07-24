import React, { Component } from 'react';

class Stats extends Component {

  render() {
    return (
      <div className="Statistics">
        <div className="PersonalInfo">
          {this.props.icon && <img className="playerIcon" src={this.props.icon} alt="player icon"/>}
          {this.props.userName && <h2>{this.props.userName}</h2>}
        </div>

        <div className="CompetitiveInfo">
          {this.props.rank && <h3>{this.props.rank}</h3>}
          {this.props.rankIcon && <img className="rankIcon" src={this.props.rankIcon} alt="rank icon"/>}
          {this.props.gamesWon && <p>Record: {this.props.gamesWon} - {this.props.gamesLost} - {this.props.gamesTied}</p>}
          {this.props.timePlayed && <p>Time Played: {this.props.timePlayed}</p>}
        </div>

        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }

}

export default Stats;
