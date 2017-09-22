import React, { Component } from 'react';

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
        this.handleInput
    }
    render() {
        return (
            <form
                className='addNewAnimal'
                {/* function that handle the submit form add new */}
                {/* onSubmit={this.props.???} */}
                >
                <input
                    type='text'
                    {/* value={this.props.????.name} */}
                    name='name'
                    placeholder='Name'
                /><br/>
                <input
                    type='text'
                    {/* value={this.props.????.species} */}
                    name='species'
                    placeholder='Species'
                /><br/>
                <input
                    type='text'
                    {/* value={this.props.????.age} */}
                    name='age'
                    placeholder='Age'
                /><br/>
                <input
                    type='text'
                    {/* value={this.props.????.breed_origin} */}
                    name='breed_origin'
                    placeholder='Breed or origin'
                /><br/>
                <input
                    type='text'
                    {/* value={this.props.????.personality} */}
                    name='personality'
                    placeholder='Personality'
                /><br/>
                <input
                    type='text'
                    {/* value={this.props.????.abilities} */}
                    name='abilities'
                    placeholder='Abilities'
                /><br/>
                <input
                    type='text'
                    {/* value={this.props.????.favorite_food} */}
                    name='favorite_food'
                    placeholder='Favorite food'
                /><br/>
                <input
                    type='text'
                    {/* value={this.props.????.gender} */}
                    name='gender'
                    placeholder='Gender'
                /><br/>
                <input
                    type='text'
                    {/* value={this.props.????.borough} */}
                    name='borough'
                    placeholder='Borough'
                /><br/>
                <input
                    type='text'
                    {/* value={this.props.????.image_link} */}
                    name='image_link'
                    placeholder='Link to the picture'
                /><br/>
                <button className='addNewBtn'>Add a new animal</button>
            </form>
        )
    }
}

export default AddAnimalForm;
