import React, { Component } from 'react';
import axios from 'axios';

import AnimalList from './AnimalList';
import YelpCall from './YelpCall'

class SearchForm extends Component {
constructor() {
  super();
  this.state = {
    animals: [],
    shelter: {},
    inputBoroughValue: '',
    searched: false,
    animalsLoaded: false,
  }
  this.handleBoroughSearch = this.handleBoroughSearch.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  this.findAnimals = this.findAnimals.bind(this);
}

handleBoroughSearch(event) {
  this.setState({
    inputBoroughValue: event.target.value,
    searched: false,
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
      searched: true,
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
  if (this.state.searched) {
    return(
      <div className="searchForm">
        <YelpCall
          handleBoroughSearch={this.handleBoroughSearch}
          handleSearchSubmit={this.handleSearchSubmit}
          isSearched={this.state.searched}
        /><br /><br />
        <div id="shelterInfo">
          <h3 id="shelterName">
            {this.state.shelter.name}
          </h3>
        </div>
        <AnimalList
          isLoaded={this.state.animalsLoaded}
          animalData={this.state.animals}
          findAnimals={this.findAnimals}
        />
      </div>
    )
  }
  return(
    <div className="searchForm">
      <YelpCall
        handleBoroughSearch={this.handleBoroughSearch}
        handleSearchSubmit={this.handleSearchSubmit}
        isSearched={this.state.searched}
      />
    </div>
  )

  }
}

export default SearchForm;
