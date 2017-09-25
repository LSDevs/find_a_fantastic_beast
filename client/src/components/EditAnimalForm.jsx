import React, { Component } from 'react';
import axios from 'axios';
import EditForm from './partials/EditForm';
// @Silvi - This is just a mess, I was trying to mix all the exercise we've done done so far, but actually the funcion is incompleted.


class EditAnimalForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isBeingEdited: false,
            inputNameValue: this.props.animals.name,
            inputSpeciesValue: this.props.animals.species,
            inputAgeValue: this.props.animals.age,
            inputBreedOriginValue: this.props.animals.breed_origin,
            inputPersonalityValue: this.props.animals.personality,
            inputAbilitiesValue: this.props.animals.abilities,
            inputFavFoodValue: this.props.animals.favorite_food,
            inputGenderValue: this.props.animals.gender,
            inputBoroughValue: this.props.animals.borough,
            inputImageValue: this.props.animals.image,
            id: this.props.match.params.id,
        }
    }

handleAnimalEdit(event) {
    event.preventDefault();
    axios.put(`http://localhost:3001/api/animals/:borough/${this.state.id}`), {
        name: this.state.inputNameValue,
        species: this.state.inputSpeciesValue,
        age: this.state.inputAgeValue,
        breedOrigin: this.state.inputBreedOriginValue,
        personality: this.state.inputPersonalityValue,
        abilities: this.props.inputAbilitiesValue,
        favFood: this.props.inputFavFoodValue,
        gender: this.props.inputGenderValue,
        borough: this.props.inputBoroughValue,
        inputImageValue: this.props.inputImageValue,
        }).then(animal => {
        console.log(res.data)
        {
            const editAnimal = {
                animal: res.data.animal.name,
                species: res.data.animal.species,
                age: res.data.animal.age,
                breedOrigin: res.data.animal.breed_origin,
                personality: res.data.animal.personality,
                abilities: res.data.animal.abilities,
                favFood: res.data.animal.favorite_food,
                gender: res.data.animal.gender,
                borough: res.data.animal.borough,
                inputImageValue: res.data.animal.image_link,
            }
            this.setState((prevState) => {
                return {
                    animals: prevState.animals.concat(editedAnimal)
                }
            })
        }
    })
 }
}



export default EditAnimalForm;
