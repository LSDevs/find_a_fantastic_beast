import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EditAnimalForm from './EditAnimalForm';
class Animal extends Component {
  render() {
    console.log(this.props.animal.id);
    return (
      <div className='Animal'>
        <div className='animalImage'>
          <img src={this.props.animal.image_link} alt='animal' />
        </div>
        <div className="animalInfo">
        <div className="animalName">
          {this.props.animal.name}
        </div>
        <div className="animalSpecies">
          {this.props.animal.species}
        </div>
        <button className='readMoreBtn'>
          <Link to={`/animals/${this.props.animal.id}`}>
            View
          </Link>
        </button>
        </div>
      </div>
    );
  };
}

export default Animal;
