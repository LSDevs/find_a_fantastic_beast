import React, { Component } from 'react';
import Animal from './Animal';
import axios from 'axios'


class AnimalList extends Component {

 componentDidMount() {
    console.log('in mount')
     this.props.findAnimals();
 }

// renderAnimalList() {
//     if (this.state.animalListDataReceived) {
//         return this.state.animals.map((animal)=> {
//             return <Animal animal={animal} key={animal.id} />
//         })
//     } else return "Loading...";
// }


  render() {
    return (
      <div id='AnimalBoroughList'>
        <h3>
          {this.props.shelterData}
        </h3>
        <div id="animal List">

        </div>
      </div>
        )
    }
}


export default AnimalList;
