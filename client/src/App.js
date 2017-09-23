import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import './App.css';
import AnimalList from './components/AnimalList';
import SingleAnimal from './components/SingleAnimal';
import AddAnimalForm from './components/AddAnimalForm';
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
    inputNameValue: '',
    inputSpeciesValue: '',
    inputAgeValue: '',
    inputBreedOriginValue: '',
    inputPersonalityValue: '',
    inputAbilitiesValue: '',
    inputFavoriteFoodsValue: '',
    inputGenderValue: '',
    addInputBoroughValue: '',
    inputImageValue: '',
  }
  this.handleBoroughSearch = this.handleBoroughSearch.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  this.findAnimals = this.findAnimals.bind(this);

        this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this);
        this.handleInputNameChange = this.handleInputNameChange.bind(this);
        this.handleInputSpeciesChange = this.handleInputSpeciesChange.bind(this);
        this.handleInputAgeChange = this.handleInputAgeChange.bind(this);
        this.handleInputBreedOriginChange = this.handleInputBreedOriginChange.bind(this);
        this.handleInputPersonalityChange = this.handleInputPersonalityChange.bind(this);
        this.handleInputAbilitiesChange = this.handleInputAbilitiesChange.bind(this);
        this.handleInputFavoriteFoodsChange = this.handleInputFavoriteFoodsChange.bind(this);
        this.handleInputGenderChange = this.handleInputGenderChange.bind(this);
        this.handleInputBoroughChange = this.handleInputBoroughChange.bind(this);
        this.handleInputImageChange = this.handleInputImageChange.bind(this);
}

  handleInputNameChange(event) {
        this.setState({inputNameValue: event.target.value})
    }

    handleInputSpeciesChange(event) {
        this.setState({inputSpeciesValue: event.target.value})
    }

    handleInputAgeChange(event) {
        this.setState({inputAgeValue: event.target.value})
    }

    handleInputBreedOriginChange(event) {
        this.setState({inputBreedOriginValue: event.target.value})
    }

    handleInputPersonalityChange(event) {
        this.setState({inputPersonalityValue: event.target.value})
    }

    handleInputAbilitiesChange(event) {
        this.setState({inputAbilitiesValue: event.target.value})
    }

    handleInputFavoriteFoodsChange(event) {
        this.setState({inputFavoriteFoodsValue: event.target.value})
    }

    handleInputGenderChange(event) {
        this.setState({inputGenderValue: event.target.value})
    }

    handleInputBoroughChange(event) {
        this.setState({addInputBoroughValue: event.target.value})
    }

    handleInputImageChange(event) {
        this.setState({inputImageValue: event.target.value})
    }

    handleAddFormSubmit(event) {
      //event.preventDefault();
      //event.target.content = '';

      axios.post('http://localhost:3001/api/animals', {
        name: this.state.inputNameValue,
        species: this.state.inputSpeciesValue,
        age: this.state.inputAgeValue,
        breed_origin: this.state.inputBreedOriginValue,
        personality: this.state.inputPersonalityValue,
        abilities: this.state.inputAbilitiesValue,
        favorite_foods: this.state.inputFavoriteFoodsValue,
        gender: this.state.inputGenderValue,
        borough: this.state.addInputBoroughValue,
        image_link: this.state.inputImageValue
      })
      .then(res => {
        console.log(res.data);
        {
          const newAnimal = {
            name: res.data.animal.name,
            species: res.data.animal.species,
            age: res.data.animal.age,
            breed_origin: res.data.animal.breed_origin,
            personality: res.data.animal.personality,
            abilities: res.data.animal.abilities,
            favorite_foods: res.data.animal.favorite_foods,
            gender: res.data.animal.gender,
            borough: res.data.animal.borough,
            image_link: res.data.animal.image_link,
          }
          this.setState((prevState) => {
            return {
              animals: prevState.animals.concat(newAnimal),
            }
          })
        }
      }).catch(err=> console.log(err));
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
  if (this.state.isAdding) {
    return(
      <div>
      <AddAnimalForm
      handleAddFormSubmit={this.handleAddFormSubmit}
      handleInputNameChange={this.handleInputNameChange}
      handleInputSpeciesChange={this.handleInputSpeciesChange}
      handleInputAgeChange={this.handleInputAgeChange}
      handleInputBreedOriginChange={this.handleInputBreedOriginChange}
      handleInputPersonalityChange={this.handleInputPersonalityChange}
      handleInputAbilitiesChange={this.handleInputAbilitiesChange}
      handleInputFavoriteFoodsChange={this.handleInputFavoriteFoodsChange}
      handleInputGenderChange={this.handleInputGenderChange}
      handleInputBoroughChange={this.handleInputBoroughChange}
      handleInputImageChange={this.handleInputImageChange}

      inputNameValue={this.state.inputNameValue}
      inputSpeciesValue={this.state.inputSpeciesValue}
      inputAgeValue={this.state.inputAgeValue}
      inputBreedOriginValue={this.state.inputBreedOriginValue}
      inputPersonalityValue={this.state.inputPersonalityValue}
      inputAbilitiesValue={this.state.inputAbilitiesValue}
      inputFavoriteFoodsValue={this.state.inputFavoriteFoodsValue}
      inputGenderValue={this.state.inputGenderValue}
      addInputBoroughValue={this.state.addInputBoroughValue}
      inputImageValue={this.state.inputImageValue}
      />

      <SearchForm
        handleBoroughSearch={this.handleBoroughSearch}
        handleSearchSubmit={this.handleSearchSubmit}
        />
        </div>
      )
  }

  if (this.state.search) {
    return(
      <div className="App">
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
    return (
      <div className="App">
      <button id='addNew' onClick={() => {
        this.setState({isAdding: true})
      }}>Put an animal up for adoption</button>
      <SearchForm
        handleBoroughSearch={this.handleBoroughSearch}
        handleSearchSubmit={this.handleSearchSubmit} />
      </div>
    );
  }

}



export default App;
