import React, { Component } from 'react';

class AddAnimalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdding: false,
            inputNameValue: '',
            inputSpeciesValue: '',
            inputAgeValue: '',
            inputBreedOriginValue: '',
            inputPersonalityValue: '',
            inputAbilitiesValue: '',
            inputFavoriteFoodsValue: '',
            inputGenderValue: '',
            inputBoroughValue: '',
            inputImageValue: '',
        }
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
        this.setStte({inputAbilitiesValue: event.target.value})
    }

    handleInputFavoriteFoodsChange(event) {
        this.setState({inputFavoriteFoodsValue: event.target.value})
    }

    handleInputGenderChange(event) {
        this.setState({inputGenderValue: event.target.value})
    }

    handleInputBoroughChange(event) {
        this.setState({inputBoroughValue: event.target.value})
    }

    handleInputImageChange(event) {
        this.setState({inputImageValue: event.target.value})
    }



    renderAddForm() {
        return (
            <form
                className='addNewAnimal'
                onSubmit={(event)=> {
                    this.props.handleAnimalAdd(event);
                    this.setState({isAdding: false});
                }}
                >
                <input
                    type='text'
                    value={this.state.inputNameValue}
                    name='name'
                    placeholder='Name'
                    onChange={this.handleInputNameChange}
                /><br/>
                <input
                    type='text'
                    value={this.state.inputSpeciesValue}
                    name='species'
                    placeholder='Species'
                    onChange={this.handleInputSpeciesChange}
                /><br/>
                <input
                    type='text'
                    value={this.state.inputAgeValue}
                    name='age'
                    placeholder='Age'
                    onChange={this.handleInputAgeChange}
                /><br/>
                <input
                    type='text'
                    value={this.state.inputBreedOriginValue}
                    name='breed_origin'
                    placeholder='Breed or origin'
                    onChange={this.state.handleInputBreedOriginChange}
                /><br/>
                <input
                    type='text'
                    value={this.state.inputPersonalityValue}
                    name='personality'
                    placeholder='Personality'
                    onChange={this.state.handleInputPersonalityChange}
                /><br/>
                <input
                    type='text'
                    value={this.state.inputAbilitiesValue}
                    name='abilities'
                    placeholder='Abilities'
                    onChange={this.state.handleInputAbilitiesChange}
                /><br/>
                <input
                    type='text'
                    value={this.state.inputFavoriteFoodsValue}
                    name='favorite_food'
                    placeholder='Favorite food'
                    onChange={this.state.handleInputFavoriteFoodsChange}
                /><br/>
                <input
                    type='text'
                    value={this.state.inputGenderValue}
                    name='gender'
                    placeholder='Gender'
                    onChange={this.state.handleInputGenderChange}
                /><br/>
                <input
                    type='text'
                    value={this.state.inputBoroughValue}
                    name='borough'
                    placeholder='Borough'
                    onChange={this.state.handleInputBoroughChange}
                /><br/>
                <input
                    type='text'
                    {this.state.inputImageValue}
                    name='image_link'
                    placeholder='Link to the picture'
                    onChange={this.state.handleInputImageChange}
                /><br/>
                <input type="submit" value="Submit Animal" />
                </form>
        )
    }

}

export default AddAnimalForm;
