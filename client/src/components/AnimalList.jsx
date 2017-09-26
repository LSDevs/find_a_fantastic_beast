import React, { Component } from 'react';
import Animal from './Animal';

class AnimalList extends Component {
  componentDidMount() {
    console.log('in mount')
    this.props.findAnimals();
  }
  renderAnimalList() {
    if (this.props.isLoaded) {
      return this.props.animalData.map(animal => {
        return <Animal animal={animal} key={animal.id} />
      })
    } else return "Loading...";
  }

  render() {
    return(
      <div id='AnimalBoroughList'>
        <div id="animal List">
            {this.renderAnimalList()}
        </div>
      </div>
    )
  }
}


export default AnimalList;
