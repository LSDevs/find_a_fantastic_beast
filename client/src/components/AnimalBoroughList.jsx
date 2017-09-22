import React, { Component } from 'react';
import Animal from './Animal';
import axios from 'axios';

class AnimalBoroughList extends Component {
    constructor() {
        super();
        this.state = {
            animals = [],
            inputBoroughValue: '',
            animalListDataReceived: false,
        }
    }
    
    componentDidMount() {
        axios(`http://localhost:3001/api/animals/${this.state.inputBoroughValue}`)
       .then((animals) => {
            this.setState({
                animals: res.data.data.animals,
                animalListDataReceived: true,
            })
      })
    }

    renderAnimalList() {
        if (this.state.animalListDataReceived) {
            return this.state.animals.map((animal) => {
                return <Animal animal={animal} key={animal.id}/>
            });
        } else return "Loading..."
    }

    render() {
        return (
            <div id='AnimalBoroughList'>
            {this.renderAnimalList()}
            </div>
        )
    }
}

export default AnimalBoroughList;