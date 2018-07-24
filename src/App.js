import React, { Component } from 'react';
import './App.css';

import Stats from './components/Stats';
import SearchForm from './components/SearchForm';

class App extends Component {

  state = {
    userName: undefined,
    rank: undefined,
    icon: undefined,
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
    console.log(data);
    this.setState({
      userName: data.name,
      rank: data.rating,
      icon: data.icon,
      mostPlayed: data.competitiveStats.topHeroes,
      error: ''
    });
  }

  render() {
    return (
      <div>
        <SearchForm getStats={this.getStats}/>
        <Stats
          userName={this.state.userName}
          rank={this.state.rank}
          icon={this.state.icon}
          mostPlayed={this.state.mostPlayed}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
