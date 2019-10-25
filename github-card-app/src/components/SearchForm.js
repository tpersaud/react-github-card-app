import React, { Component} from 'react';
import './SearchForm.css';

export default class SearchForm extends Component {

  username = React.createRef();

  handleSubmit = (event) => {
    alert('hello');
    event.preventDefault();
  }

  render() { 
    return (
    // <article className="container">
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="search by username" ref={this.username} required />
        <button type="submit">Submit</button>
      </form>
    /* </article> */
  )};
}