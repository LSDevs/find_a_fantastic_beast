import React, { Component } from 'react';
import axios from 'axios';
import EditForm from './partials/EditForm';

// @Silvi - This is just a mess, I was trying to mix all the exercise we've done done so far, but actually the funcion is incompleted.


class EditAnimalForm extends Component {
    constructor() {
    super();
    this.state = {
      isBeingEdited: false,
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
    this.handleAnimalEdit = this.handleAnimalEdit.bind(this);
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

  handleAnimalEdit(event) {
    event.preventDefault();

    axios.put(`http://localhost:3001/api/animals/${event.target.id.value}`, {
      name: event.target.name.value,
      species: event.target.species.value,
      age: event.target.age.value,
      breed_origin: event.target.breed_origin.value,
      personality: event.target.personality.value,
      abilities: event.target.abilities.value,
      favorite_foods: event.target.favorite_foods.value,
      gender: event.target.gender.value,
      borough: event.target.borough.value,
      image_link: event.target.image_link.value
    }).catch(err => console.log(err));

  }

  render() {
    return (
      <EditForm
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
        handleAnimalEdit={this.handleAnimalEdit}
      />
    )
  }
}

export default EditAnimalForm;
