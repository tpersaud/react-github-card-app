import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    let profile = this.props.profile;

    return (
      <article className="profile-card">
        <div className="card">
          <img className="profile-image" src={profile.avatar_url} alt="http://placehold.it/100"/>
          <div className="details">
            <h2>{profile.name}</h2>
            <h3>{profile.company}</h3>
            <p>{profile.bio}</p>
          </div>
        </div>
      </article>
    )
  }
}