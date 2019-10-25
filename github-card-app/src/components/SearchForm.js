import React, { Component} from 'react';
import axios from 'axios';
import './SearchForm.css';

export default class SearchForm extends Component {

  state = { userName: '' }

  handleSubmit = async (event) => {
    event.preventDefault();
    const userName = this.state.userName;
    let url = `https://api.github.com/users/${userName}`;
    console.log(url);
  }

  render() { 
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          placeholder="search by username"
          value={ this.state.userName }
          onChange={ event => this.setState({ userName: event.target.value }) }
          required 
        />
        <button type="submit">Submit</button>
      </form>
  )};
}