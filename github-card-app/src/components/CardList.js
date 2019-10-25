import React, { Component } from 'react';
import Card from './Card';

export default class CardList extends Component {
  render(){

    const testData = this.props.cardArray;

    return (
      <div className="card-container">
        {testData.map(data => <Card profile={data} key={data.id} />)}
      </div>
    )
  };
}