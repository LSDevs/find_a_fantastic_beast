import React, { Component } from 'react';
import Animal from './Animal';

class AnimalBoroughList extends Component {
    render() {
        return (
            <div id='AnimalBoroughList'>
            {
                {/* this.props.data.map ??? */}
            (animal => {
                return <Animal 
                {/* If we want to return only name and type, we set these?
                animalName={animal.name}
                animalType={animal.type}
                 */}
                animal={animal}
                id_animal={animal.id}
                key={animal.id}
                {/* Method that handle the single animal */}
                />
            })}
            </div>
        )
    }
}

export default AnimalBoroughList;