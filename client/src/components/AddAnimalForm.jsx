import React, { Component } from 'react';
import axios from 'axios';

import AddForm from './partials/AddForm';

class AddAnimalForm extends Component {
  constructor() {
    super();
    this.state = {
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
    event.preventDefault();
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
    .then((res) => {
      if (res.animal.id !== undefined) {
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
        console.log(newAnimal)
        this.setState((prevState) => {
          return {
            animals: prevState.animals.concat(newAnimal),
          }
        })
      }
      }).catch(err => console.log(err));
    }

  render() {
    return (
      <AddForm
        handleInputImageChange={this.handleInputImageChange}
        handleInputBoroughChange={this.handleInputBoroughChange}
        handleInputGenderChange={this.handleInputGenderChange}
        handleInputAbilitiesChange={this.handleInputAbilitiesChange}
        handleInputPersonalityChange={this.handleInputPersonalityChange}
        handleInputAgeChange={this.handleInputAgeChange}
        handleInputSpeciesChange={this.handleInputSpeciesChange}
        handleInputNameChange={this.handleInputNameChange}
        handleInputFavoriteFoodsChange={this.handleInputFavoriteFoodsChange}
        handleInputBreedOriginChange={this.handleInputBreedOriginChange}
        handleAddFormSubmit={this.handleAddFormSubmit}
        inputNameValue={this.props.inputNameValue}
      />
    )
  }
}

export default AddAnimalForm;
