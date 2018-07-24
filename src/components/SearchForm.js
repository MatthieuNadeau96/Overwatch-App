import React, { Component } from 'react';

class SearchForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.getStats}>
        <input name="username" placeholder="Enter your username"/>
        <input name="usertag" placeholder="Enter your battletag"/>
        <button>Search</button>
      </form>
    );
  }

}

export default SearchForm;
