import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import AnimalList from './components/AnimalList';
import SearchForm from './components/SearchForm';
import './App.css';
=======
import SearchForm from './components/SearchForm';
import './App.css';
import AnimalList from './components/AnimalList';
import SingleAnimal from './components/SingleAnimal';
import {Route, Redirect, Switch} from 'react-router-dom';
>>>>>>> 3b370173ea44154e76f6fd7b1bb903b30706cc1a

class App extends Component {
constructor() {
  super();
  this.state = {
    animals: [],
    shelter: {},
    inputBoroughValue: '',
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
<<<<<<< HEAD
=======

>>>>>>> 3b370173ea44154e76f6fd7b1bb903b30706cc1a

handleSearchSubmit(event) {
  event.preventDefault();
  event.target.content = '';
<<<<<<< HEAD
  axios(`http://localhost:3001/api/yelp/${this.state.inputBoroughValue}`)

=======

axios(`http://localhost:3001/api/yelp/${this.state.inputBoroughValue}`)
>>>>>>> 3b370173ea44154e76f6fd7b1bb903b30706cc1a
  .then((res) => {
    this.setState(prevState => {
      console.log(res.data.data)
      return {
      shelter: res.data.data
    }
    })
<<<<<<< HEAD
  }).catch(err => console.log(err));
  }
=======

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
     .catch(err => {console.log(err);});

  this.setState(prevState => {
    return{
      animalsLoaded: true,
    }
  })

}

>>>>>>> 3b370173ea44154e76f6fd7b1bb903b30706cc1a

render() {
  if (this.state.search) {
    return(
      <div className="App">
      <SearchForm
<<<<<<< HEAD
        handleBoroughSearch={this.handleBoroughSearch}
        handleSearchSubmit={this.handleSearchSubmit} />

      <AnimalList
        shelterData={this.state.shelter.name}
        animalData={this.state.animals} />
=======
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
    return (
      <div className="App">
      <SearchForm
        handleBoroughSearch={this.handleBoroughSearch}
        handleSearchSubmit={this.handleSearchSubmit} />
>>>>>>> 3b370173ea44154e76f6fd7b1bb903b30706cc1a
      </div>
    );
  }

}

export default App;
