import React, { Component } from 'react';
import Animal from './Animal';


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
                </div>
                )
    }
}


export default AnimalList;
