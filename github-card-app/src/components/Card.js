import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    return (
      <article className="profile-card">
        <img className="profile-image" src="http://placehold.it/100"/>
        <div className="details">
          <h2>Title</h2>
          <h3>Company</h3>
          <p>Details</p>
        </div>
      </article>
    )
  }
}