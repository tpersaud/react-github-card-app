import React, { Component }from 'react';
import CardList from '../components/CardList';
import SearchForm from '../components/SearchForm';

import './Main.css'

export default class Main extends Component {
  render() { 
    const testData = [
      {id:1, name: "Terrence Persaud", company: null, avatar_url: "https://avatars1.githubusercontent.com/u/6266840?v=4"},
      {id:2, name: null, company: "Software Tambien", avatar_url: "https://avatars1.githubusercontent.com/u/51153574?v=4"},
      {id:3, name: "Paul DeCarlo", company: "Microsoft", avatar_url: "https://avatars3.githubusercontent.com/u/2018336?v=4"}
    ];
    return(
      <section className="main">
        <SearchForm />
        <CardList cardArray={testData}/>
      </section>
  )}
}