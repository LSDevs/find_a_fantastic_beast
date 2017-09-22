import React, { Component } from 'react';
// import axios from 'axios';
import SearchForm from './components/SearchForm';
import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
    borough: [],
    inputBoroughValue: '',
  }
  this.handleBoroughSearch = this.handleBoroughSearch.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
}

  handleBoroughSearch(event) {
    this.setState({
      inputBoroughValue: event.target.value
    })
    console.log(event.target.value)
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    event.target.content = '';
  }

  render() {
    return (
      <div className="App">
      <SearchForm
        handleBoroughSearch={this.handleBoroughSearch}
        handleSearchSubmit={this.handleSearchSubmit}
      />
      </div>
    );
  }
}

export default App;
