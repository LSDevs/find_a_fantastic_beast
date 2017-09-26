import React, { Component } from 'react';
import axios from 'axios';
import EditForm from './partials/EditForm';

class EditAnimalForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false,
      inputNameValue: props.animal.name,
      inputSpeciesValue: props.animal.species,
      inputAgeValue: props.animal.age,
       inputBreedOriginValue: props.animal.breed_origin,
      inputPersonalityValue: props.animal.personality,
       inputAbilitiesValue: props.animal.abilities,
       inputFavoriteFoodsValue: props.animal.favorite_foods,
       inputGenderValue: props.animal.gender,
       addInputBoroughValue: props.animal.borough,
      inputImageValue: props.animal.image_link,
      id: props.animal.id,
    }
}

handleAnimalEdit(event) {
    event.preventDefault();

    event.target.content = '';

    axios.put(`http://localhost:3001/api/animals/${this.props.animal.borough}/${this.state.id}`, {
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
    }).then(animal => {
      console.log(animal, 'update')

    })
    .catch(err => console.log(err));
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
        inputNameValue={this.state.inputNameValue}
         inputSpeciesValue={this.state.inputSpeciesValue}
         inputAgeValue={this.state.inputAgeValue}
         inputBreedOriginValue={this.state.inputBreedOriginValue}
         inputPersonalityValue={this.state.inputPersonalityValue}
         inputAbilitiesValue={this.state.inputAbilitiesValue}
         inputFavoriteFoodsValue={this.state.inputFavoriteFoodsValue}
         inputGenderValue={this.state.inputGenderValue}
         addInputBoroughValue={this.state.addinputGenderValue}
        inputImageValue={this.state.inputImageValue}
         animal={this.props.animal}
      />
    )
}
}

export default EditAnimalForm;
