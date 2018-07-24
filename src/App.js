import React, { Component } from 'react';
import './App.css';

import Stats from './components/Stats';
import SearchForm from './components/SearchForm';

class App extends Component {

  state = {
    userName: undefined,
    icon: undefined,
    rank: undefined,
    rankIcon: undefined,
    timePlayed: undefined,
    gamesPlayed: undefined,
    gamesWon: undefined,
    gamesLost: undefined,
    gamesTied: undefined,
    mostPlayed: undefined,
    error: undefined
  }

  getStats = async (e) => {
    e.preventDefault();
    const userName = e.target.elements.username.value;
    const userTag = e.target.elements.usertag.value;
    const api_call = await fetch('http://ovrstat.com/stats/pc/us/' + userName + '-' + userTag);
    // const api_call = await fetch('http://ovrstat.com/stats/pc/us/Matthieu-11302');
    const data = await api_call.json();
    if (userName && userTag) {
      console.log(data);
      this.setState({
        userName: data.name,
        icon: data.icon,
        rank: data.rating,
        rankIcon: data.ratingIcon,
        timePlayed: data.competitiveStats.careerStats.allHeroes.game.timePlayed,
        gamesPlayed: data.competitiveStats.careerStats.allHeroes.game.gamesPlayed,
        gamesWon: data.competitiveStats.careerStats.allHeroes.game.gamesWon,
        gamesLost: data.competitiveStats.careerStats.allHeroes.game.gamesLost,
        gamesTied: data.competitiveStats.careerStats.allHeroes.game.gamesTied,
        mostPlayed: data.competitiveStats.topHeroes,
        error: ''
      });
    } else {
      this.setState({
        userName: undefined,
        icon: undefined,
        rank: undefined,
        rankIcon: undefined,
        timePlayed: undefined,
        gamesPlayed: undefined,
        gamesWon: undefined,
        gamesLost: undefined,
        gamesTied: undefined,
        mostPlayed: undefined,
        error: 'Please enter your name and battletag.'
      });
    }
  }

  render() {
    return (
      <div className="App">
        <SearchForm getStats={this.getStats}/>
        <Stats
          userName={this.state.userName}
          icon={this.state.icon}
          rank={this.state.rank}
          rankIcon={this.state.rankIcon}
          timePlayed={this.state.timePlayed}
          gamesPlayed={this.state.gamesPlayed}
          gamesWon={this.state.gamesWon}
          gamesLost={this.state.gamesLost}
          gamesTied={this.state.gamesTied}
          mostPlayed={this.state.mostPlayed}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
