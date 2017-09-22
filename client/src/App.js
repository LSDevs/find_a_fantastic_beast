import React, { Component } from 'react';
import axios from 'axios';
import AnimalList from './components/AnimalList';
import SearchForm from './components/SearchForm';
import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
    animals: [],
    shelter: {},
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
  axios(`http://localhost:3001/api/yelp/${this.state.inputBoroughValue}`)

  .then((res) => {
    this.setState(prevState => {
      console.log(res.data.data)
      return {
      shelter: res.data.data
    }
    })
  }).catch(err => console.log(err));
  }

render() {
    return (
      <div className="App">
      <SearchForm
        handleBoroughSearch={this.handleBoroughSearch}
        handleSearchSubmit={this.handleSearchSubmit} />

      <AnimalList
        shelterData={this.state.shelter.name}
        animalData={this.state.animals} />
      </div>
    );
  }

}

export default App;
