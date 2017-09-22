import React, { Component } from 'react';
import Animal from './Animal';
import axios from 'axios'

 class AnimalList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             animals:[],
//             inputBoroughValue: '',
//             animalListDataReceived: false,
//         }

//     }

// componentDidMount() {
//     axios(`http://localhost:3001/api/animals/${this.state.borough}`)
//     .then((animals) => {
//         this.setState({
//             animals: animals.animals,
//             animalListDataReceived: true,
//         })
//     })
// }

 componentDidMount() {
    console.log('in mount')
     this.props.findAnimals();
 }

renderAnimalList() {
     if (this.props.isLoaded) {
         return this.props.animalData.map((animal)=> {
             return <Animal animal={animal} key={animal.id} />
         })
     } else return "Loading...";
 }

  render() {
    return (
      <div id='AnimalBoroughList'>
        <h3>
          {this.props.shelterData}
        </h3>
        <div id="animal List">
            {this.renderAnimalList()}
        </div>
      </div>
        )
    }
}


export default AnimalList;
