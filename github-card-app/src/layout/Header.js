import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() { return (
    <header>
      {this.props.title}
    </header>
  )}
}