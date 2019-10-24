import React, { Component }from 'react';
import Card from '../components/Card';

import './Main.css'

export default class Main extends Component {
  render() { 
    return(
      <section className="main">
        <div className="content">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
  )}
}