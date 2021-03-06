import React, {Component} from 'react';

class EditForm extends Component {
  render() {
    console.log(this.props.animal.id)
    return(

      <form
        className='editAnimal'
        onSubmit={this.props.handleAnimalEdit}
      >
        <div id="editOption">Name</div>
         <input className="inputEdit"
          type='text'
          value={this.props.inputNameValue}
          name='name'
          placeholder='Name'
          onChange={this.props.handleInputNameChange}
        /><br/>
        <div id="editOption">Species</div>
        <input className="inputEdit"
          type='text'
          value={this.props.inputSpeciesValue}
          name='species'
          placeholder='Species'
          onChange={this.props.handleInputSpeciesChange}
        /><br/>
        <div id="editOption">Age</div>
        <input className="inputEdit"
          type='text'
          value={this.props.inputAgeValue}
          name='age'
          placeholder='Age'
          onChange={this.props.handleInputAgeChange}
        /><br/>
        <div id="editOption">Breed or Origin</div>
        <input className="inputEdit"
          type='text'
          value={this.props.inputBreedOriginValue}
          name='breed_origin'
          placeholder='Breed or origin'
          onChange={this.props.handleInputBreedOriginChange}
        /><br/>
        <div id="editOption">Personality</div>
        <input className="inputEdit"
          type='text'
          value={this.props.inputPersonalityValue}
          name='personality'
          placeholder='Personality'
          onChange={this.props.handleInputPersonalityChange}
        /><br/>
        <div id="editOption">Abilities</div>
        <input className="inputEdit"
          type='text'
          value={this.props.inputAbilitiesValue}
          name='abilities'
          placeholder='Abilities'
          onChange={this.props.handleInputAbilitiesChange}
        /><br/>
        <div id="editOption">Favorite foods</div>
        <input className="inputEdit"
          type='text'
          value={this.props.inputFavoriteFoodsValue}
          name='favorite_foods'
          placeholder='Favorite food'
          onChange={this.props.handleInputFavoriteFoodsChange}
        /><br/>
        <div id="editOption">Gender</div>
        <input className="inputEdit"
          type='text'
          value={this.props.inputGenderValue}
          name='gender'
          placeholder='Gender'
          onChange={this.props.handleInputGenderChange}
        /><br/>
        <div id="editOption">Location</div>
          <select className="inputEdit" name='borough' type='text' onChange={this.props.handleInputBoroughChange}
          value={this.props.addInputBoroughValue}>
          <option value='null'>Borough</option>
          <option value='Bronx'>Bronx</option>
              <option value='Brooklyn'>Brooklyn</option>
              <option value='Manhattan'>Manhattan</option>
              <option value='Queens'>Queens</option>
              <option value='Staten Island'>Staten Island</option>
            </select>
        <br/>
        <div id="editOption">Image link</div>
        <input className="inputEdit"
          type='text'
          value={this.props.inputImageValue}
          name='image_link'
          placeholder='Image Link'
          onChange={this.props.handleInputImageChange}
        /><br/>
        <button id="submitEditButton">Submit Edit!</button>
      </form>
    )
  }
}

export default EditForm;
