import React, {Component} from 'react';

class EditForm extends Component {
  render() {

    return(
      <form
        className='editAnimal'
        onSubmit={this.props.handleAnimalEdit}
      >
        <input
          type='text'
          value={this.props.inputNameValue}
          name='name'
          placeholder='Name'
          onChange={this.props.handleInputNameChange}
        /><br/>
        <input
          type='text'
          value={this.props.inputSpeciesValue}
          name='species'
          placeholder='Species'
          onChange={this.props.handleInputSpeciesChange}
        /><br/>
        <input
          type='text'
          value={this.props.inputAgeValue}
          name='age'
          placeholder='Age'
          onChange={this.props.handleInputAgeChange}
        /><br/>
        <input
          type='text'
          value={this.props.inputBreedOriginValue}
          name='breed_origin'
          placeholder='Breed or origin'
          onChange={this.props.handleInputBreedOriginChange}
        /><br/>
        <input
          type='text'
          value={this.props.inputPersonalityValue}
          name='personality'
          placeholder='Personality'
          onChange={this.props.handleInputPersonalityChange}
        /><br/>
        <input
          type='text'
          value={this.props.inputAbilitiesValue}
          name='abilities'
          placeholder='Abilities'
          onChange={this.props.handleInputAbilitiesChange}
        /><br/>
        <input
          type='text'
          value={this.props.inputFavoriteFoodsValue}
          name='favorite_food'
          placeholder='Favorite food'
          onChange={this.props.handleInputFavoriteFoodsChange}
        /><br/>
        <input
          type='text'
          value={this.props.inputGenderValue}
          name='gender'
          placeholder='Gender'
          onChange={this.props.handleInputGenderChange}
        /><br/>
          <select name='addBorough' type='text' onChange={this.props.handleInputBoroughChange}
          value={this.props.addInputBoroughValue}>
          <option value='null'>Borough</option>
          <option value='Bronx'>Bronx</option>
              <option value='Brooklyn'>Brooklyn</option>
              <option value='Manhattan'>Manhattan</option>
              <option value='Queens'>Queens</option>
              <option value='Staten Island'>Staten Island</option>
            </select>
        <br/>
        <input
          type='text'
          value={this.props.inputImageValue}
          name='image_link'
          placeholder='Image Link'
          onChange={this.props.handleInputImageChange}
        /><br/>
        <button id="submit">Submit Edit!</button>
      </form>
    )
  }
}

export default EditForm;
