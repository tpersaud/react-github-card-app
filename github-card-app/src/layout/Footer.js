import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    let author = 'Terrence Persaud, Jr.';
    let copyright = `${year} ${author}`;

    return (
      <footer>
        &copy; {copyright}
      </footer>
    )
  }
}