import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import './App.css';
import AnimalList from './components/AnimalList';
import SingleAnimal from './components/SingleAnimal';
import {Route, Redirect, Switch} from 'react-router-dom';

class App extends Component {
constructor() {
  super();
  this.state = {
    animals: [],
    shelter: {},
    inputBoroughValue: '',
    isAdding: false,
    search: false,
    animalsLoaded: false,
  }
  this.handleBoroughSearch = this.handleBoroughSearch.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  this.findAnimals = this.findAnimals.bind(this);
}

handleBoroughSearch(event) {
  this.setState({
    inputBoroughValue: event.target.value,
    search: false,
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

  this.setState(prevState => {
    return{
      search: true,
    }
  })
}
findAnimals() {
  axios(`http://localhost:3001/api/animals/${this.state.inputBoroughValue}`)
     .then(res => {
      this.setState(prevState => {
        console.log(res.data.data.animals)
        return {
          animals: res.data.data.animals
        }
      })
     })
     .catch(err => {console.log(err)});

  this.setState(prevState => {
    return{
      animalsLoaded: true,
    }
  })

}


render() {
    return(
      <div className="App">
      <button>Put Your Animal Up For Adoption</button>
      <SearchForm
        handleBoroughSearch={this.handleBoroughSearch}
        handleSearchSubmit={this.handleSearchSubmit}
      />

        <AnimalList
          isLoaded={this.state.animalsLoaded}
          shelterData={this.state.shelter.name}
          animalData={this.state.animals}
          findAnimals={this.findAnimals}
        />
      </div>
    )
  }
}

export default App;
