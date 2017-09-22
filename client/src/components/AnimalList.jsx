import React, { Component } from 'react';
import Animal from './Animal';


class AnimalList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         animals:[],
    //         inputBoroughValue: '',
    //         animalListDataReceived: false,
    //     }

    // }

// componentDidMount() {
//     axios(`http://localhost:3001/api/animals/${this.state.inputBoroughValue}`)
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
                {/* {this.props.data.map(animal => {
                    return <Animal
                    singleAnimal={animal}
                    iden={animal.id}
                    key={animal.id} />
           })} */}
           <h1> {this.props.shelterData}</h1>
                </div>
                )
    }
}


export default AnimalList;
