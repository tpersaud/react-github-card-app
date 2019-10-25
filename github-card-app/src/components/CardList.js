import React, { Component } from 'react';
import Card from './Card';

export default class CardList extends Component {
  render(){

    const testData = this.props.cardArray;

    let result = testData.map(data => <Card profile={data} key={data.id} />);

    return (
      <React.Fragment>
        {result}
      </React.Fragment>
    )
  };
}