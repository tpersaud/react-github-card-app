import React, { Component }from 'react';
import CardList from '../components/CardList';
import SearchForm from '../components/SearchForm';

import './Main.css'

class Main extends Component {

  state = {
    profiles: []
  };

  addNewProfile = (profileData) => {
    this.setState( prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  }

  render() {
    return(
      <section className="main">
        <SearchForm addNewProfile={this.addNewProfile}/>
        <CardList cardArray={this.state.profiles}/>
      </section>
  )}
}

export default Main;